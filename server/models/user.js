const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

var User = module.exports = mongoose.model('users', UserSchema);

module.exports.createUser = (user, callback) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash;
        user.save(callback);
    });
  });
}

module.exports.getUserByUsername = (username, callback) => {
  var query = {username: username};
  User.findOne(query, callback);
}

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
}

module.exports.comparePassword = (typedPass, hash, callback) => {
  bcrypt.compare(typedPass, hash, function(err, isMatch) {
    if(err)
      throw err;

    callback(null, isMatch);
  });
}
