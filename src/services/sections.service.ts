import { getRequest } from "@src/services/axiosConfig";
import { FindGetCourseSections } from "./dtos";

export const getSectionsByCourseId = async (
  courseId: string
): Promise<FindGetCourseSections> => {
  return await getRequest(`section/course/${courseId}`);
};