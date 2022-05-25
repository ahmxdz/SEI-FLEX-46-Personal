const Movie = require('../models/movie');
const Performer = require('../models/performer')

module.exports = {
  index,
  show,
  new: newMovie,
  create,
  showFilteredList
};

function index(req, res) {
  Movie.find({}, function(err, allMovies) {
    res.render('movies/index', { title: 'All Movies', myMovies: allMovies });
  });
}

function showFilteredList(req, res) {
  Movie.find({title: 'Superbad'}, function(err, superbadMovies) {
    res.render('movies/index', { title: 'All Movies Called Superbad', myMovies: superbadMovies });
  });
}

function show(req, res) {

  /* 
  3 triggers to running operations in mongoose

  1 - Promise
  2 - Callback functions
  3 - exec | aka execute
  */

  Movie.findById(req.params.id).populate('cast').exec(function (err, movie) {
    // Fetching all the performers and passing that back to the view
  
    // Without populate
    /*
    movie.cast = [
      "62032bc098148b2ccfbe0bc4",
      "62032bc098148b2ccfbe0bc3"
    ]
    */

    // With populate
    /*
    movie.cast = [
      {
        _id: "62032bc098148b2ccfbe0bc4",
        name: "Ashwin Samtani",
        dob: "1991/03/19"
      }
    ]
    */
    
    Performer.find({
      _id: {
        $nin: movie.cast
      }
    },
      function (performFindErr, performers) {
        res.render('movies/show',
          {
            title: 'Movie Detail',
            movie,
            performers
          })
      })
  })
  // Movie.findById(req.params.id, function(err, movie) {
  //   res.render('movies/show', { title: 'Movie Detail', movie });
  // });
}

function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string

  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  Movie.create(req.body, function (err, movie) {
    if (err) {
      return res.send(`Error!! ${err}`);
    }
    res.redirect(`/movies/${movie._id}`);
  })
}

