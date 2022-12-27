"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hogwarts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hogwarts.init(
    {
      name: DataTypes.STRING,
      founder: DataTypes.STRING,
      members: DataTypes.STRING,
      symbol: DataTypes.STRING,
      description: DataTypes.TEXT,
      attribute: DataTypes.STRING,
      wolf: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hogwarts",
    }
  );
  return hogwarts;
};
