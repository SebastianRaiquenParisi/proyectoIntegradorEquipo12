'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Conditions', 
    [
      {
       condition_name: 'new-in',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       condition_name: 'sale',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       condition_name: 'available',
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Conditions', null, {});
    
  }
};
