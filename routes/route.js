var express = require('express');
var router = express.Router();
const miController = require('../controllers').mi_controller;

//Este usa params. Lo que se ponga después de los dos puntos es el nombre del param dentro del controller
router.get('/matching/:category', function(req, res) {
    miController.getCategories(req, res);
});

router.get('/', function(req, res) {
    res.status(200).send({message:"Matching service."});
});


//POST, PUT y DELETE son iguales. Para usar body tienen que usar POST o PUT.

module.exports = router;