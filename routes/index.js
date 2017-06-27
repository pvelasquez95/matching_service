var express = require('express');
var router = express.Router();
 
var matching = require('./route');
 
router.use('/', matching);
 
//API start
router.get('/', function(req, res) {
  res.status(200).send({
    message: 'Api service.',
  }); 
});
 
module.exports = router;