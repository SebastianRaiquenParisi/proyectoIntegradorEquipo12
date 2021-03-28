'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_size.belongsTo(models.Product, {
        foreignKey:"product_id"
    })
      product_size.belongsTo(models.Size, {
        foreignKey:"size_id"
    })
}
};
  product_size.init({
    quantity: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_size',
  });
  return product_size;
};