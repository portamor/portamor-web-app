import nextConnect from "next-connect"
const models = require("../../../db/models/index")

const handler = nextConnect().get(async (req, res) => {
  const {
    query: { nextPage },
    method,
    body,
  } = req

  const posts = await models.posts.findAndCountAll({
    include: [
      {
        model: models.users,
        as: "user",
      },
    ],
    attributes: {
      exclude: ["userId"],
    },
    order: [
      // Will escape title and validate DESC against a list of valid direction parameters
      ["id", "DESC"],
    ],
    offset: nextPage ? +nextPage : 0,
    limit: 5,
  })

  res.statusCode = 200
  res.json({
    status: "success",
    data: posts.rows,
    total: posts.count,
    nextPage: +nextPage + 5,
  })
})

export default handler
