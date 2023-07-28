import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react";
import { api } from "@src/redux/api";
import { RootState } from "@src/redux/store";
import { Course, Courses, Instructor, Section, User } from "@src/models";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<Courses, { page: number; genre: string }>({
      async queryFn({ page, genre }, api, _extraOptions, fetchWithBQ) {
        const result = await fetchWithBQ({
          url: "/courses",
          params: {
            size: (api.getState() as RootState).user.pageSize,
            page,
            genre,
          },
          method: "get",
        });
        return result.data
          ? { data: result.data as Courses }
          : { error: result.error as FetchBaseQueryError };
      },
    }),
    /* getCoursesByGenre: build.query<FindCourses, { genre: string }>({
      query: ({ genre }) => ({
        url: `/courses/genre/${genre}`,
        method: "get",
      }),
    }), */
    getCourseDetail: build.query<
      {
        courseDetail: Course;
        instructor: Instructor;
        section: Section[];
        users: User[];
      },
      { courseId: string }
    >({
      async queryFn({ courseId }, _queryApi, _extraOptions, fetchWithBQ) {
        const results = await Promise.all([
          fetchWithBQ({ url: `/courses/id/${courseId}`, method: "get" }),
          fetchWithBQ({ url: `/section/course/${courseId}`, method: "get" }),
          fetchWithBQ({ url: `/users/course/${courseId}`, method: "get" }),
        ]);

        const failedResults = results.find(({ error }) => error);
        if (failedResults) {
          return { error: failedResults.error };
        }

        const [courseDetail, section, users] = results as [
          { data: Course },
          { data: Section[] },
          { data: User[] }
        ];
        const instructor = await fetchWithBQ({
          url: `/instructor/id/${courseDetail.data.instructorId}`,
          method: "get",
        });
        return instructor.data
          ? {
              data: {
                courseDetail: courseDetail.data,
                instructor: instructor.data as Instructor,
                section: section.data,
                users: users.data,
              },
            }
          : { error: instructor.error as FetchBaseQueryError };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetCoursesQuery, useGetCourseDetailQuery } = extendedApi;
