'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sizes', 
    [
      {
       size_name: 'xs',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 's',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'm',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'l',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'xl',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'xxl',
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       size_name: 'talle unico',
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
