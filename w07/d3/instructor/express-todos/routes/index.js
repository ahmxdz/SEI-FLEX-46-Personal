var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/flickerPictures', function (req, res) {
  const flickerUsername = process.env.FLICKER_USERNAME
  const flickerPassword = process.env.FLICKER_PASSWORD
  connectToFlicker(flickerUsername, flickerPassword)
})

module.exports = router;
