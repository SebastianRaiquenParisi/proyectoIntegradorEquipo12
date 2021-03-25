'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', 
    [
      {
       first_name: 'Admin',
       last_name: 'AdminLastName',
       email: 'admin@admin',
       password: '$2a$10$Q65Uga2onFssqaOymnZMduhJ3Oyrl08xoMK7D9lZaI8M1dnSELsFm',
       is_admin: 1,
       address_id: 1,
       avatar:"1614287296035.jpg",
       createdAt: new Date,
       updatedAt: new Date
      },
      {
      first_name: 'User',
       last_name: 'UserLastName',
       email: 'user@user',
       password: '$2a$10$lUXloBssGjCyYfRZSXhhze19dT.mpAnJS9EzRBDBhAN59nWc6gnSu',
       is_admin: 0,
       address_id: 2,
       avatar:"1614287296035.jpg",
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
