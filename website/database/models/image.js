'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      
     /*  Image.belongsToMany(models.Products, {
        through: "image_product",
        as:"product",
        foreignKey:"image_id"
      })  */     
    }
  };
  Image.init({
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};