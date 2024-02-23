// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { slug } = req.query

  if (!slug) {
    res.status(200).json({})
    return
  }

  if (slug[0] === "id") {
    // El id viene en slug[1]
    res.status(200).json({
      data: {
        id: "1",
        name: "Pepe",
        description: "Tiene experiencia",
        score: 2,
        profilePicture: "https://picsum.photos/seed/picsum/80/80",
        reviews: 2,
      },
    })
  }

  if (slug[0] === "course") {
    // El id viene en slug[1]
    res.status(200).json({})
  }
}
