var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Corgi = require('../models/corgi')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Corgi-Harmony' });
});


router.put('/:_id', function(req, res, next) {
  var name = req.body.dogName;
  Corgi.update({name: dogName}, function(name) {
    res.json(name)
  });
});

module.exports = router;
