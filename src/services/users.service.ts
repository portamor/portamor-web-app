import { getRequest } from "@src/services/axiosConfig";
import { FindUsersByCourseId } from "./dtos";

export const getUsersByCourseId = async (
  courseId: string
): Promise<FindUsersByCourseId> => {
  return await getRequest(`users/course/${courseId}`);
};