'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', 
    [
      {
       image_url:'tshirt1.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt2.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt3.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt4.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt5.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt6.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt7.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt8.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt9.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'tshirt10.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie1.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie2.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie3.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie4.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie5.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie6.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie7.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie8.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie9.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'hoodie10.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap1.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap2.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap3.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap4.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap5.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap6.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap7.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap8.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap9.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'cap10.jpg',
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },


  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('Images', null, {});
    
  }
};
