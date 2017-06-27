var express = require('express');
var router = express.Router();
 
var matching = require('./matching');
 
router.use('/', matching);
 
//API start
router.get('/', function(req, res) {
  res.status(200).send({
    message: 'Bienvenido al API de su Microservicio',
  }); 
});
 
module.exports = router;