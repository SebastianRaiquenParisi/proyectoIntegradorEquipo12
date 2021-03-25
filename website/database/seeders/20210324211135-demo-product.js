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
       size: 'L',
       main_image: 'imagen_muestra_1.jpg',
       status: 'active',
       stock: 10,
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
       size: 'M',
       main_image: 'imagen_muestra_2.jpg',
       status: 'active',
       stock: 7,
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
       size: 'S',
       main_image: 'imagen_muestra_3.jpg',
       status: 'active',
       stock: 13,
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
       size: 'M',
       main_image: 'imagen_muestra_4.jpg',
       status: 'active',
       stock: 17,
       condition:"avilable",
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
