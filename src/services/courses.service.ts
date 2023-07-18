import { getRequest } from "@src/services/axiosConfig";
import { FindCourse, FindCourses } from "./dtos";

export const getCourses = async (page: number, size: number): Promise<FindCourses> => {
  return await getRequest(`courses?page=${page}&size=${size}`);
};

export const getCoursesByGenre = async (genre: string): Promise<FindCourses> => {
  return await getRequest(`courses/genre/${genre}`);
};

export const getCourseDetail = async (courseId: string): Promise<FindCourse> => {
  return await getRequest(`courses/id/${courseId}`);
};
