'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      image_product.belongsTo(models.Product, {
        foreignKey:"product_id"
    })
      image_product.belongsTo(models.Image, {
        foreignKey:"image_id"
    })
  }
  };
  image_product.init({
    image_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    image_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_product',
  });
  return image_product;
};