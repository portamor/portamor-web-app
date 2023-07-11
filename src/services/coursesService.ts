import { Courses } from "@src/models/services.types";
import { getRequest } from "@src/services/axiosConfig";

export const getCourses = async (
  page: number,
  size: number
): Promise<Courses> => {
  return await getRequest(`courses?page=${page}&size=${size}`);
};

export const getCoursesByGenre = async (genre: string): Promise<Courses> => {
  return await getRequest(`courses/genre/${genre}`);
};
