// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { slug } = req.query

  if (!slug) {
    res.status(200).json({})
    return
  }

  if (slug[0] === "course") {
    // El id viene en slug[1]
    res.status(200).json({
      data: [
        {
          name: "Vic",
          lastName: "Smith",
        },
      ],
    })
  }

  if (slug[0] === "inscription") {
    // POST
    // El id viene en slug[1]
    res.status(200).json({
      data: true,
    })
  }
}
