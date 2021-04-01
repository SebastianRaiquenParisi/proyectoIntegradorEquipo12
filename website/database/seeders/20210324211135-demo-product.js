'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', 
    [
      {
       name: 'Product One',
       price: '99.30',
       discount: 10,
       category: 't-shirt',
       description: 'short description',
       full_description: 'full descripcion',
       status: 'active',
       condition:"new in",
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       name: 'Product two',
       price: '100.00',
       discount: 20,
       category: 'hoodie',
       description: 'short description',
       full_description: 'full descripcion',
       status: 'active',
       condition:"sale",
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       name: 'Product Three',
       price: '97.50',
       discount: 9,
       category: 't-shirt',
       description: 'short description',
       full_description: 'full descripcion',
       status: 'active',
       condition:"new in",
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       name: 'Product Four',
       price: '37.00',
       discount: 30,
       category: 'hoodie',
       description: 'short description',
       full_description: 'full descripcion',
       status: 'active',
       condition:"avilable",
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
