import { Course, Courses, Instructor, Review, Section, User } from "@src/modules/shared/models";

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

// No se usa
export interface FindGetReviewsByCourseId {
  data: Review[];
}
