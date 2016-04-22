var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Corgi = require('../models/corgi')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Corgi-Harmony' });
});


router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  Corgi.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, corgi) {
    if (err) return res.status(500).send(err);
    res.json(corgi);
  });
});

module.exports = router;
