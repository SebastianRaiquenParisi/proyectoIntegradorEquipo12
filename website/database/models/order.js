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
      Order.belongsTo(models.Cart, {
        foreignKey:"cart_id"
    })
    }
  };
  Order.init({
    order_date: DataTypes.DATE,
    status: DataTypes.STRING,
    cart_id: DataTypes.INTEGER,
    shipment_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};