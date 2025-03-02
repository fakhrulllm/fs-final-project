'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employer.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    total_employee: DataTypes.NUMBER,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employer',
  });
  return Employer;
};