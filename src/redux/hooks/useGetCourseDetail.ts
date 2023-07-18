import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { useAppDispatch, useAppSelector } from "./useApp";
import { fetchGetCourseDetail } from "../slices/courseDetailSlice";
import { fetchGetCourseSections } from "../slices/courseSectionsSlice";
import { fetchGetCourseUsers } from "../slices/courseUsersSlice";
import { fetchGetCourseInstructor } from "../slices/courseInstructorSlice";

export const useGetCourseDetail = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const courseDetail = useAppSelector((state) => state.courseDetail.data);
  const instructor = useAppSelector((state) => state.courseInstructor.data);
  const courseUsers = useAppSelector((state) => state.courseUsers.data);
  const courses = useAppSelector((state) => state.courses.data);
  const courseSections = useAppSelector((state) => state.courseSections.data);

  const doRequest = async (courseId, callback) => {
    const [courseDetail] = await Promise.all([
      dispatch(fetchGetCourseDetail({ id: courseId })).unwrap(),
      dispatch(fetchGetCourseSections({ id: courseId })).unwrap(),
      dispatch(fetchGetCourseUsers({ id: courseId })).unwrap(),
    ]);
    await dispatch(
      fetchGetCourseInstructor({ id: courseDetail.data.instructorId })
    ).unwrap();
    callback && callback();
  };

  return {
    doRequest,
    user,
    courses,
    courseDetail,
    instructor,
    courseUsersQuantity: courseUsers?.length,
    firstVideoId: courseSections && courseSections[0]?.videos[0].id,
  };
};
