'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Condition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {   
      Condition.hasMany(models.Product, {
        as:"condition",
        foreignKey:"condition_id"
      })
    }
  };
  Condition.init({
    condition_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Condition',
  });
  return Condition;
};