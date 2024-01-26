// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return
  }

  res.status(200).json({
    data: [],
  });
}
