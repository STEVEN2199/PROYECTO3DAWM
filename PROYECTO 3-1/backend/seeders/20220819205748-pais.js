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
     let arreglo= [{"nombre":"Inglaterra"},
     {"nombre":"Inglaterra"},
     {"nombre":"Francia"},
     {"nombre":"España"},
     {"nombre":"España"},
     {"nombre":"Inglaterra"},
     {"nombre":"Francia"},
     {"nombre":"Inglaterra"},
     {"nombre":"España"},
     {"nombre":"Alemania"},
    ];
    for (let i= arreglo.length -1; i>= 0; i--) {
      let pais = arreglo[i];
      await queryInterface.bulkInsert('pais', [{
          id:i,
          nombrePais: pais['nombre'],
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
     await queryInterface.bulkDelete('pais', null, {});
  }
};
