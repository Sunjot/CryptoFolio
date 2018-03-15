const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

// User registration

router.post('/api/signup', (req, res) => {
  var name = req.body.username;
  var pass = req.body.password;

  // add code to check if inputs are valid here

  var newUser = new User({
    username: name,
    password: pass
  });

  User.createUser(newUser, (err, user) => {
    console.log("hey");
  });


});

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.getUserByUsername(username, (err, user) => {
      if(err)
        throw err;
      if(!user)
        return done(null, false);

      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch)
          return done(null, user);
        else
          return done(null, false);
      });
    });
  }
));

// User login

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.send("hello");
});


module.exports = router;
