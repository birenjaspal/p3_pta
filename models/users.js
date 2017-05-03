var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
