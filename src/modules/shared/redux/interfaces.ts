import { RequestType } from "@src/modules/shared/const/request"
import { Course, Courses, Instructor, Section, User } from "@src/modules/shared/models"

export interface CoursesState {
  status: RequestType
  error: string | null
  data: Courses | null
  pageSize: number
}

export interface CourseState {
  status: RequestType
  error: string | null
  data: Course | null
}

export interface SectionState {
  status: RequestType
  error: string | null
  data: Section[] | null
}

export interface CourseUsersState {
  status: RequestType
  error: string | null
  data: User[] | null
}

export interface InstructorState {
  status: RequestType
  error: string | null
  data: Instructor | null
}
