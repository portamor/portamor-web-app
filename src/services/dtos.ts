import { Course, Courses, Instructor, Section, User } from "@src/models";

export interface FindUsersByCourseId {
  data: User[];
}

export interface FindInstructorId {
  data: Instructor;
}

export interface FindCourses {
  data: Courses;
}

export interface FindCourse {
  data: Course;
}

export interface FindCoursesByGenre {
  data: Courses;
}

export interface FindGetCourseSections {
  data: Section[];
}
