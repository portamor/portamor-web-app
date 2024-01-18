export type Course = {
  id: string;
  instructorId: string;
  userId: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  genre: string;
  rating: number;
  materials: string[];
};

export type Courses = {
  courses: Course[];
  meta: {
    currentPage: number;
    pageSize: number;
    totalCourses: number;
    totalPages: number;
  };
};

export type Section = {
  id: string;
  name: string;
  videos: [{ id: string; videoTitle: string }];
};

export type User = {
  id: string;
  name: string;
  lastName: string;
  code: string;
  birthday: string;
  admin: boolean;
};

export type Instructor = {
  id: string;
  name: string;
  description: string;
  score: number;
  profilePicture: string;
  reviews: number;
};

export enum ReviewType {
  EXCELENT = "Excelente",
  RECOMENT = "Recomendado",
  GOOD = "Bueno",
  NOT_LIKE = "No me gusto",
  BAD = "Malo",
}

export type Review = {
  id: string;
  courseId: string; // Revisar xq no se encuentra
  title: ReviewType;
  comment: string;
  starsValue: number;
};

export type CourseVideo = {
  id: string;
  videoTitle: string;
  videoLink: string;
  videoDescription: string;
};

export type CourseVideoState = {};
