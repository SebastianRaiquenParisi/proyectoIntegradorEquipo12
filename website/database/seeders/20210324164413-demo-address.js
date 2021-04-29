'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Addresses', 
    [
      {
       street: 'simpre viva',
       number: 1234,
       city: 'Spring Field',
       province: 'Ohio',
       country: 'Usa',
       postal_code: 1234,
       user_id: 1,
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       street: 'street 2',
       number: 5678,
       city: 'Buenos Aires',
       province: 'Buenos Aires',
       country: 'Argentina',
       postal_code: 5678,
       user_id: 2,
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Addresses', null, {});
    
  }
};
