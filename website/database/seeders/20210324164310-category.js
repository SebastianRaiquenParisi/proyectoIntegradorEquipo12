'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', 
    [
      {
       category_name: 'Remera',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       category_name: 'Buzo',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       category_name: 'Accesorio',
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
