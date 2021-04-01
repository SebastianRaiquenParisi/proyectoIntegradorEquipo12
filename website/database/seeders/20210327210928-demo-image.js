'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', 
    [
      {
       image_url:'imagen_muestra_1.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'imagen_muestra_2.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'imagen_muestra_3.jpg',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       image_url:'imagen_muestra_4.jpg',
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },


  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('Images', null, {});
    
  }
};
