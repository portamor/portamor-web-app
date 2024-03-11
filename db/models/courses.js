"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      duration: { type: DataTypes.STRING, allowNull: false },
      level: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.TEXT, allowNull: false },
      genre: { type: DataTypes.STRING, allowNull: true },
      rating: { type: DataTypes.INTEGER, allowNull: true },
      materials: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "courses",
    }
  )
  return course
}
