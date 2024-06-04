const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("Temperamento", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
