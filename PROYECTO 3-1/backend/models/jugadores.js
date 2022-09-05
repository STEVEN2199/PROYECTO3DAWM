'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jugadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jugadores.init({
    nombreJugador: DataTypes.STRING,
    numGoles: DataTypes.INTEGER,
    edad: DataTypes.INTEGER,
    salario: DataTypes.INTEGER,
    posicion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jugadores',
  });
  return jugadores;
};