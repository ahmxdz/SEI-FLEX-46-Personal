var express = require('express');
var router = express.Router();
var movieCtrl = require("../controller/movies.controller")

/* GET home page. */

router.get('/', function (req, res, next){
  movieCtrl.getAllMovies(req, res, next)
})

router.get('/new', function(req, res, next){
  movieCtrl.new(req, res, next)
})

router.post('/', function(req, res, next){
  movieCtrl.createNewMovies(req, res, next)
})

router.get('/:movieId/cast/:castId', function(req, res, next){
  console.log(req.params)
  console.log(req.params.movieId)
  res.send('send something')
})


router.delete('/:movieId', function(req, res, next){
  console.log(req.params.id)
  console.log(req.params.movieId)
  movieCtrl.deleteMovie(req, res, next)
})

// Youtube example of how they fetch video Id
router.get('/watch', function (req, res, next) {
  const videoId = req.query.v
})


module.exports = router;
