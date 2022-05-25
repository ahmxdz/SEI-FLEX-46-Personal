const Movie = require('../models/movie');
const Performer = require('../models/performer');
const request = require('request')

module.exports = {
  index,
  show,
  new: newMovie,
  create
};

function index(req, res) {
  console.log('index route')
  const boredApiLink = 'https://www.boredapi.com/api/activity'

  const boredRequestPromise = new Promise(function (resolve, reject) {
    request(boredApiLink, function (err, response, body) {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(body))
      }
    })
  })

  const movieFindPromise = Movie.find({})

  Promise.all([boredRequestPromise, movieFindPromise])
    .then(function (responses) {
      const boardResponse = responses[0]
      const movieFindResponse = responses[1]

      res.render('movies/index', {
        title: 'All Movies',
        movies: movieFindResponse,
        activity: boardResponse.activity
      })
    })


  // request(boredApiLink, function (err, response, body) {
  //   body = JSON.parse(body)
  //   const activity = body.activity

  //   const moviesFind = Movie.find({})
  //   moviesFind.then(function (movies) {
  //     res.render('movies/index', { title: 'All Movies', movies, activity })
  //   }).catch(function (err) {
  //     console.log('--------')
  //     console.log(err)
  //   })
  // })

  // Movie.find({}, function(err, movies) {
  //   res.render('movies/index', { title: 'All Movies', movies });
  // });

}

function show(req, res) {
  Movie.findById(req.params.id)
  .populate('cast').exec(function(err, movie) {
    // Performer.find({}).where('_id').nin(movie.cast)
    movie.cast = []

    Performer.find({_id: {$nin: movie.cast}})
    .exec(function(err, performers) {
      console.log(performers);
      res.render('movies/show', {
        title: 'Movie Detail', movie, performers
      });
    });
  });
}

function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.redirect('/movies/new');
    // res.redirect('/movies');
    res.redirect(`/movies/${movie._id}`);
  });
}
