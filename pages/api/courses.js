// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    courses: [
      {
        id: 123,
        title: "Title course",
        description: "Lorem ipsum dolor sit ammet",
        duration: "3",
        level: "Basic",
        image: "https://picsum.photos/200/300",
        genre: "Current genre",
        rating: 5,
        materials: "materials",
      },
    ],
    meta: {
      currentPage: 1,
      pageSize: 1,
      totalCourses: 1,
      totalPages: 1,
    },
  });
}
