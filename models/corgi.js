var mongoose = require('mongoose');

var corgiSchema = {
  name: String,
  age: String,
  image: String
}

var Corgi = mongoose.model('Corgi', corgiSchema);

module.exports = Corgi;
