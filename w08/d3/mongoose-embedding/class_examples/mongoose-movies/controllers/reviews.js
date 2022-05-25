const movie = require('../models/movie')
const Movie = require('../models/movie')

const create = (req, res, next) => {
    console.log(req.body)
    
    const movieId = req.params.movieId
    Movie.findById(movieId, function (err, movie) {
        if (err) {
            return res.send(`Cannot update reviews because of error: ${err}`)
        }

        movie.reviews.push(req.body)
        movie.save(function () {
            // res.send('Movie reviews updated')
            res.redirect(`/movies/${movieId}`)
        })
    })
}

const deleteReview = (req, res) => {
    const movieId = req.params.movieId
    Movie.findById(movieId, (err, movie) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error');
        } else {
            console.log(movie.reviews.id(req.params.reviewId))
            const review = movie.reviews.id(req.params.reviewId)
            if (review) {
                movie.reviews.id(req.params.reviewId).remove();
                movie.save();
                res.redirect(`/movies/${movieId}`)
            }
            else
                res.status(404).send('Error');
        }
    });
}

module.exports = {
    create,
    deleteReview
}
