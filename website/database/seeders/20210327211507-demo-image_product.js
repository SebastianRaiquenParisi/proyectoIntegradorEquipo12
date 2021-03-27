'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Image_products', 
    [
      {
       product_id:1,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:2,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:3,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:4,
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Image_products', null, {});

  }
};
