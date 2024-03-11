"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Courses",
      [
        {
          title: "Curso Demo",
          description: "Lorem ipsum dolor sit ammet",
          duration: "3",
          level: "Basic",
          image: "https://picsum.photos/200/300",
          genre: "Custom genre",
          rating: 5,
          materials: "lapiz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Courses", null, {})
  },
}
