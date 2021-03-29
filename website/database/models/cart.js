'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate(models) {
    Cart.belongsTo(models.User, {
        foreignKey:"user_id"
      })
    Cart.belongsTo(models.Product, {  ///product??? N:N??
      foreignKey:"product_id"
      })
    }
  };
  
  Cart.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    product_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};