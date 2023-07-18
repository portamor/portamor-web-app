// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    res.status(200).json({
      data: {
        courses: [
          {
            id: "123",
            userId: "2",
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
      },
    });
    return
  }
  
  if (slug[0] === "genre") {
    /* FALTA */
  }

  if (slug[0] === "id") {
    // El id viene en slug[1]
    res.status(200).json({
      data: {
        instructorId: "1010",
        title: "Title course",
      },
    });
  }
}
