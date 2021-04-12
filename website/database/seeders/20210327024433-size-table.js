'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sizes', 
    [
      {
       size_name: 'XS',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'S',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'M',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'L',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'XL',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'XXL',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'Unico',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: '1',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: '2',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: '3',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: '4',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: '5',
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Sizes', null, {});
  
  }
};
