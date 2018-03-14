const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./routes/routes.js')

mongoose.connect('mongodb://localhost/Crypto')

app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

var db = mongoose.connection

db.on('error', () => { // check for error connecting to the db
  console.log("error");
});

db.once('open', () => { // once the connection to the db goes through

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(3000, () => {
    console.log('Listening on port 3000...');
  });

});
