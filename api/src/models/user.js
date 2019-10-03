const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  emailVerified: Boolean,
});

module.exports = mongoose.model('User', userSchema);
