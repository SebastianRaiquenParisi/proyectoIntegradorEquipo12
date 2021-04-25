'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', 
    [
      {
       first_name: 'Admin',
       last_name: 'AdminLastName',
       email: 'admin@admin.com',
       password: '$2a$10$Q65Uga2onFssqaOymnZMduhJ3Oyrl08xoMK7D9lZaI8M1dnSELsFm',
       is_admin: true,
       avatar:"1614287296035.jpg",
       createdAt: new Date,
       updatedAt: new Date
      },
      {
      first_name: 'User',
       last_name: 'UserLastName',
       email: 'user@user.com',
       password: '$2a$10$lUXloBssGjCyYfRZSXhhze19dT.mpAnJS9EzRBDBhAN59nWc6gnSu',
       is_admin: false,
       avatar:"1614287296035.jpg",
       createdAt: new Date,
       updatedAt: new Date
      }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('Users', null, {});

  }
};
