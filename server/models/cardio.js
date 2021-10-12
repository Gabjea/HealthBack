'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cardio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cardio.init({
    person_id: DataTypes.STRING,
    type: DataTypes.STRING,
    duration: DataTypes.STRING,
    calories: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cardio',
  });
  return Cardio;
};