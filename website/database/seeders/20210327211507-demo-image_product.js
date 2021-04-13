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
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:3,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:4,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:5,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:6,
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:7,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:8,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:9,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:10,
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:11,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:12,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:13,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:14,
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:15,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:16,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:17,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:18,
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:19,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:20,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:21,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:22,
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:23,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:24,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:25,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:26,
       image_id:2,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:27,
       image_id:3,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:28,
       image_id:4,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:29,
       image_id:1,
       image_type:'main',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       product_id:30,
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
