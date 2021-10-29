const { model, Schema } = require('mongoose');
const { isValidPassword } = require('../utils/isValidPassword');

const userSchema = new Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  user_name: String,
  email: String,
  password: String

});

userSchema.methods.isValidPassword = isValidPassword;

module.exports = model('User', userSchema);
