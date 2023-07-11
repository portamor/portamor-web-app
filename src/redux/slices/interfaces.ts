import { RequestType } from "@src/const/request";
import { Courses } from "@src/models";

export interface CoursesState {
  status: RequestType;
  error: string | null;
  data: Courses | null;
  pageSize: number;
}
