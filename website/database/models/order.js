'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /* Order.belongsToMany(models.Products, {
       through: "order_product",
       as:"products",
       foreignKey:"order_id"
    }), */
    
      Order.belongsToMany(models.User, {
       through: "order_user",
       as:"user",
       foreignKey:"order_id"
      })
    }
  };
  Order.init({
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};