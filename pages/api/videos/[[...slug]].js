// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    res.status(200).json({});
    return
  }

  if (slug[0] === "id") {
    // El id viene en slug[1]
    res.status(200).json({
      data: {
        id: "1010",
        videoTitle: "Title video",
        videoLink:
          "https://www.youtube.com/watch?v=i3CerEkkAmU&ab_channel=YoelvisMulen%7Bcode%7D",
        videoDescription: "Lorem description",
      },
    });
  }
}
