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
  rating: string;
  materials: string;
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
  videos: [{ id: string }]
};

export type User = {}

export type Instructor = {
  id: string;
  name: string;
  score: number;
  profilePicture: string;
};