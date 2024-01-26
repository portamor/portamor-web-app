// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    res.status(200).json({});
    return
  }

  // Reviews By ID
  if (slug[0]) {
    res.status(200).json({
      data: [
        {
          id: "1",
          courseId: "", // Revisar que no se encuentra
          title: "Recomendado",
          comment: "Estuvo bueno",
          starsValue: 4,
        },
      ],
    });
  }
}
