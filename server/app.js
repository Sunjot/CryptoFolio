const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./routes/routes.js')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')

mongoose.connect('mongodb://localhost/Crypto')
var db = mongoose.connection

const allowedOrigins = ["http://localhost:8080", "https://imalwayssunny.xyz"];
app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'ilovedominos',
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

// Serve react component

app.use(express.static('build')); // tell express where all static files are located

app.get('*', (req, res, next) => {
  // serves index.html
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// Listen

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
