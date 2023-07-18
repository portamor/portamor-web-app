import { getRequest } from "@src/services/axiosConfig";
import { FindInstructorId } from "./dtos";

export const getInstructorById = async (
  instructorId: string
): Promise<FindInstructorId> => {
  return await getRequest(`instructor/id/${instructorId}`);
};
