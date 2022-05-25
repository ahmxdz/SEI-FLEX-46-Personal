var express = require('express');
var router = express.Router();

var moviesCtrl = require('../controllers/movies.controller')

router.get('/', function (req, res, next) {
    moviesCtrl.getAllMovies(req, res, next)
})

router.get('/new', function (req, res, next) {
    moviesCtrl.newMovie(req, res, next)
})

router.post('/', function (req, res, next) {
    moviesCtrl.createNewMovie(req, res, next)
})

// URL params example
router.get('/:movieId/cast/:castId', function (req, res, next) {
    console.log(req.params)
    console.log(req.params.movieId)
    res.send('Something')
})

router.delete('/:movieId', function (req, res, next) {
    // This is how we get the movieId param
    console.log(req.params.movieId)
    moviesCtrl.deleteMovie(req, res, next)
})

// Youtube example of how they fetch video Id
router.get('/watch', function (req, res, next) {
    console.log(req.query)
    const videoId = req.query.v
    console.log(videoId)
    res.send('SOmething')
})

// 
// router.delete('/:movieId', function (req, res, next) {
//     moviesCtrl.deleteMovie(req, res, next)
//     // res.send('Deleting')
// })

module.exports = router;
