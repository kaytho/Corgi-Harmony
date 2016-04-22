var mongoose = require('mongoose');

var corgiSchema = {
  name: String,
  age: String,
  image: String,
  like: Boolean
}

var Corgi = mongoose.model('Corgi', corgiSchema);


module.exports = Corgi;
