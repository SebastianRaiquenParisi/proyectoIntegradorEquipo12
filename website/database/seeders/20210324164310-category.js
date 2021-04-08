'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', 
    [
      {
       category_name: 't-shirt',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       category_name: 'hoodie',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       category_name: 'accessory',
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
