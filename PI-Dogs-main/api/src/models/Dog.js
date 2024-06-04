const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Imagen: { type: DataTypes.STRING, allowNull: false },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    Edad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });
};
