
type Course = {
  id: string;
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
