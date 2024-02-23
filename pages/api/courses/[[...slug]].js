// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { slug } = req.query

  if (!slug) {
    res.status(200).json({
      data: {
        message: "Cursos encontrados con exito",
        courses: [
          {
            id: "123",
            title: "Title course",
            description: "Lorem ipsum dolor sit ammet",
            image: "https://picsum.photos/200/300",
            materials: ["lápiz, papel"],

            userId: "2",
            duration: "3",
            level: "Basic",
            genre: "Current genre",
            rating: 5,
          },
        ],
        meta: {
          currentPage: 1,
          pageSize: 1,
          totalCourses: 1,
          totalPages: 1,
        },
      },
    })
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
        description: "Lorem ipsum dolor",
        image: "https://picsum.photos/200/300",
        materials: ["lápiz, papel"],
        rating: 5,
      },
    })
  }

  if (slug[0] === "videos") {
    // El id viene en slug[1]
    res.status(200).json({
      data: [
        {
          id: "1010",
          videoTitle: "Title video",
          videoLink: "Lorem ipsum dolor",
          videoDescription: "Lorem description",
        },
      ],
    })
  }
}
