'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let arreglo= [{"nombre":"Manchester"},
     {"nombre":"Manchester"},
     {"nombre":"Paris"},
     {"nombre":"Barcelona"},
     {"nombre":"Madrid"},
     {"nombre":"Liverpool"},
     {"nombre":"Monaco"},
     {"nombre":"Manchester"},
     {"nombre":"Valencia"},
     {"nombre":"Munich"},
    ];

    for (let i= arreglo.length -1; i>= 0; i--) {
      let ciudad = arreglo[i];
      await queryInterface.bulkInsert('ciudades', [{
          id:i,
          nombreCiudad: ciudad['nombre'],
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
   }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('ciudades', null, {});
  }
};
