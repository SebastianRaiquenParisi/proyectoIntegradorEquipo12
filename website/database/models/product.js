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
    static associate(models) {/*
    Product.belongsToMany(models.Orders, {
      through: "order_product",
      as:"orders",
      foreignKey:"product_id"
    }) ,
    Product.belongsToMany(models.Images, {
      through: "image_product",
      as:"image",
      foreignKey:"product_id"
    }); */
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    full_description: DataTypes.TEXT,
    size: DataTypes.STRING,
    main_image: DataTypes.STRING,
    status: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};