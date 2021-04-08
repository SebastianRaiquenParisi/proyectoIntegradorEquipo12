'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', 
    [
      {
       name: 'Product One',
       price: '99.30',
       discount: 10,
       description: 'short description',
       full_description: 'full descripcion',
       status: '1',
       category_id:1,
       condition_id:1,
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       name: 'Product two',
       price: '100.00',
       discount: 20,
       description: 'short description',
       full_description: 'full descripcion',
       status: '1',
       category_id:2,
       condition_id:2,
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       name: 'Product Three',
       price: '97.50',
       discount: 9,
       description: 'short description',
       full_description: 'full descripcion',
       status: '1',
       category_id:3,
       condition_id:1,
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       name: 'Product Four',
       price: '37.00',
       discount: 30,
       description: 'short description',
       full_description: 'full descripcion',
       status: '1',
       category_id:1,
       condition_id:3,
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
