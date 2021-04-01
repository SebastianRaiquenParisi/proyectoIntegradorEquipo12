'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Image_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Images'
          },
          key: 'id'
        },
        allowNull: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Products'
          },
          key: 'id'
        },
        allowNull: false
      },
      image_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Image_products');
  }
};