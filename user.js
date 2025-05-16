const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile_number: String,
  gender: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
