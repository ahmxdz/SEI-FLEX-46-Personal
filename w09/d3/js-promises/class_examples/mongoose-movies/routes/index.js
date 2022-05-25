const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res, next) {
  res.redirect('/movies');
});

module.exports = router;
