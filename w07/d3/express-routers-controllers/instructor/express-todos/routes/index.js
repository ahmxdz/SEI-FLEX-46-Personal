const express = require('express');

const router = express.Router();

function homePage(req, res, next) {
  res.render('index', { title: 'Express To-Do' });
}

/* GET home page. */
router.get('/', homePage);

module.exports = router;
