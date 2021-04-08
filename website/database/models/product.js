'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Product.belongsToMany(models.Image, {
          through: "image_product",
          as:"images",
          foreignKey:"product_id"
      })
        Product.belongsToMany(models.Size, {
          through: "product_sizes",
          as:"sizes",
          foreignKey:"product_id"
      })
  }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    full_description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    category_id: DataTypes.INTEGER,
    condition_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};