const Movie = require("../models/movie")
const performer = require("../models/performer")
const Performer = require("../models/performer")


const addToCast = (req, res, next) => {
    const movieId = req.params.movieId
    const performerId = req.body.performerId
    console.log(movieId)
    console.log(performerId)
    Movie.findById(movieId, function (err, movie){
        movie.cast.push(performerId)
        movie.save()
        res.redirect(`/movies/${movieId}`)
    })

}

  function newCast(req, res) {
    Performer.create(req.body, function (err, movie) {
      if (err) {
        return res.send(`Error!! ${err}`);
      }
      res.redirect('/movies/');
    })
  }

module.exports = {
    addToCast,
    newCast
}