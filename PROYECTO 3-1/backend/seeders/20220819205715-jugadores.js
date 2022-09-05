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
   let arreglo= [{"nombre":"Ronaldo", "Edad":25, "Posicion":"CD","Salario":1200000},
   {"nombre":"Modric", "Edad":25, "Posicion":"MC","Salario":1400000},
   {"nombre":"Cristiano Ronaldo", "Edad":25, "Posicion":"CD","Salario":1500000},
   {"nombre":"Benzema", "Edad":25, "Posicion":"CD","Salario":1700000},
   {"nombre":"Kaka", "Edad":25, "Posicion":"MC","Salario":1800000},
   {"nombre":"Mbappe", "Edad":25, "Posicion":"CD","Salario":1900000},
   {"nombre":"Hazard", "Edad":25, "Posicion":"EXD","Salario":1100000},
   {"nombre":"Messi", "Edad":25, "Posicion":"EXD","Salario":1300000},
   {"nombre":"Neymar", "Edad":25, "Posicion":"EXI","Salario":1400000},
   {"nombre":"Vinicius", "Edad":25, "Posicion":"EXI","Salario":1700000}
  ];
     for (let i= arreglo.length -1; i>= 0; i--) {
      let jugador = arreglo[i];
      await queryInterface.bulkInsert('jugadores', [{
          id: i,
          nombreJugador: jugador['nombre'],
          numGoles:250+i,
          edad:jugador['Edad']+i,
          salario:jugador['Salario'],
          posicion:jugador['Posicion'],
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
     await queryInterface.bulkDelete('jugadores', null, {});  
  }
};
