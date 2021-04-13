'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', 
    [ //REMERAS
      {
       name: 'Remera Estampada AAA',
       price: '99.30',
       discount: 10,
       description: 'Regular Fit',
       full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
       status: '1',
       category_id:1,
       condition_id:1,
       createdAt: new Date,
       updatedAt: new Date
      },
      {
        name: 'Remera Estampada BBB',
        price: '88.70',
        discount: 20,
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:2,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada CCC',
        price: '75.20',
        discount: 5,
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:3,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada DDD',
        price: '67.00',
        discount: 50,
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:1,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada EEE',
        price: '99.30',
        discount: '',
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:2,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada FFF',
        price: '30.58',
        discount: 45,
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:3,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada GGG',
        price: '100.50',
        discount: 10,
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:1,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada HHH',
        price: '132.51',
        discount: '',
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:2,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada III',
        price: '90.89',
        discount: 25,
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:3,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
        name: 'Remera Estampada JJJ',
        price: '45.20',
        discount: 10,
        description: 'Regular Fit',
        full_description: 'Este diseño de remera es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:1,
        condition_id:1,
        createdAt: new Date,
        updatedAt: new Date
       },
       //BUZOS
      {
        name: 'Buzo Estampado AAA',
        price: '99.30',
        discount: 10,
        description: 'Regular Fit',
        full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
        status: '1',
        category_id:2,
        condition_id:2,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
         name: 'Buzo Estampado BBB',
         price: '88.70',
         discount: 20,
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:3,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado CCC',
         price: '75.20',
         discount: 5,
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:1,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado DDD',
         price: '67.00',
         discount: 50,
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:2,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado EEE',
         price: '99.30',
         discount: '',
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:3,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado FFF',
         price: '30.58',
         discount: 45,
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:1,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado GGG',
         price: '100.50',
         discount: 10,
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:2,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado HHH',
         price: '132.51',
         discount: '',
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:3,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado III',
         price: '90.89',
         discount: 25,
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:1,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Buzo Estampado JJJ',
         price: '45.20',
         discount: 10,
         description: 'Regular Fit',
         full_description: 'Este diseño de buzo es exclusivo. Estampado en serigrafía. Confeccionado en 100% algodón.',
         status: '1',
         category_id:2,
         condition_id:2,
         createdAt: new Date,
         updatedAt: new Date
        },
        //ACCESORIOS
      {
        name: 'Gorra Bordada AAA',
        price: '99.30',
        discount: 10,
        description: 'Regular Fit',
        full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
        status: '1',
        category_id:3,
        condition_id:3,
        createdAt: new Date,
        updatedAt: new Date
       },
       {
         name: 'Gorra Bordada BBB',
         price: '88.70',
         discount: 20,
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:1,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada CCC',
         price: '75.20',
         discount: 5,
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:2,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada DDD',
         price: '67.00',
         discount: 50,
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:3,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada EEE',
         price: '99.30',
         discount: '',
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:1,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada FFF',
         price: '30.58',
         discount: 45,
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:2,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada GGG',
         price: '100.50',
         discount: 10,
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:3,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada HHH',
         price: '132.51',
         discount: '',
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:1,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada III',
         price: '90.89',
         discount: 25,
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
         condition_id:2,
         createdAt: new Date,
         updatedAt: new Date
        },
        {
         name: 'Gorra Bordada JJJ',
         price: '45.20',
         discount: 10,
         description: 'Regular Fit',
         full_description: 'Este diseño de gorra es exclusivo. Bordada. Colores: Negro / Blanco / Rojo',
         status: '1',
         category_id:3,
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
