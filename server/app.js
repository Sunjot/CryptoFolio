const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./routes/routes.js')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect('mongodb://localhost/Crypto')
var db = mongoose.connection

app.use(passport.initialize());
app.use(passport.session());

const allowedOrigins = ["http://localhost:8080", "https://imalwayssunny.xyz"];
app.use(cors({origin: allowedOrigins}));

app.use(bodyParser.json());
app.use('/', routes);

// Serve react component

app.use(express.static('build')); // tell express where all static files are located

app.get('*', (req, res) => {
  // serves index.html
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// Listen

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
