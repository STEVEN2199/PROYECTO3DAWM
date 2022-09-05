var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');


/*----------------------------------------------------*/ 
const Equipo = require('../models').equipos;
router.get('/equipos', (req, res, next) => {
  Equipo.findAll({
    attributes: { exclude: ['updatedAt'] },
  })
    .then((equipos) => {
      res.json(equipos);
    })
    .catch((error) => res.status(400).send(error));
});
/*----------------------------------------------------*/ 


/*----------------------------------------------------*/ 
const Jugador = require('../models').jugadores;

router.get('/jugadores', (req, res, next) => {
    Jugador.findAll({
    attributes: { exclude: ['updatedAt'] },
  })
    .then((jugadores) => {
      res.json(jugadores);
    })
    .catch((error) => res.status(400).send(error));
});
/*----------------------------------------------------*/ 

/*----------------------------------------------------*/ 
const Ciudad = require('../models').ciudades;
router.get('/ciudades', (req, res, next) => {
    Ciudad.findAll({
    attributes: { exclude: ['updatedAt'] },
  })
    .then((ciudades) => {
      res.json(ciudades);
    })
    .catch((error) => res.status(400).send(error));
});
/*----------------------------------------------------*/ 


/*----------------------------------------------------*/ 
const Pais = require('../models').pais;
router.get('/paises', (req, res, next) => {
    Pais.findAll({
    attributes: { exclude: ['updatedAt'] },
  })
    .then((paises) => {
      res.json(paises);
    })
    .catch((error) => res.status(400).send(error));
});
/*----------------------------------------------------*/ 

module.exports = router;
