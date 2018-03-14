const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.post('/register', (req, res) => {
  console.log("Register");
});

module.exports = router;
