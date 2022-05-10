'use strict';

const course = require("./course");


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Instructor.hasMany(course);
    }
  }
  Instructor.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instructor',
  });
  return Instructor;
};