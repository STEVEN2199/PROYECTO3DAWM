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
     let arreglo= [{"nombre":"Manchester United"},
     {"nombre":"Manchester City"},
     {"nombre":"Paris Saint Germain"},
     {"nombre":"Barcelona"},
     {"nombre":"Real Madrid"},
     {"nombre":"Liverpool"},
     {"nombre":"Monaco"},
     {"nombre":"Arsenal"},
     {"nombre":"Valencia"},
     {"nombre":"Bayer Munich"},
    ];


    for (let i= arreglo.length -1; i>= 0; i--) {
      let equipo = arreglo[i];
      await queryInterface.bulkInsert('equipos', [{
          id: i,
          nombreEquipo: equipo['nombre'],
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
     await queryInterface.bulkDelete('equipos', null, {});
  }
};
