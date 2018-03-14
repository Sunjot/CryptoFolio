const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Crypto')

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
