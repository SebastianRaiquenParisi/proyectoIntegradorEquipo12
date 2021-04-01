'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.User, {
        foreignKey:"address_id"
      })
    }
  };
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};