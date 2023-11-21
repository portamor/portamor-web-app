import { FindGetCourseSections } from "./dtos";
import { api } from "@src/redux/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSectionsByCourseId: build.query<
      FindGetCourseSections,
      { courseId: string }
    >({
      query: ({ courseId }) => ({
        url: `/section/course/${courseId}`,
        method: "get",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSectionsByCourseIdQuery } = extendedApi;
