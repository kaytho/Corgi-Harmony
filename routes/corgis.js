var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Corgi-Harmony' });
});


// router.get('/', function(req, res, next) {

// });


// router.post('/', function(req, res, next) {

// });


module.exports = router;
