const mongoose = require('mongoose')
const Movie = require('../models/movie.model')
const { move } = require('../routes')


const createNewMovieForm = (req, res, next) => {
    res.render('movies/newMovie', {
        myName: 'Ashwin'
    })
}

const updateMovie = (req, res, next) => {
    // Quick example of update
    Movie.updateOne({ title: 'Avengers' }, {
        $set: {
            releaseYear: 2015
        }
    })
}

const createNewMovie = (req, res, next) => {
    console.log('Trying to create a new movie')

    try {
        // Reading the data from the request body - 
        const movieData = req.body
        console.log(movieData)

        // This can be removed since we are validating in the schema
        // const requiredFields = []
        // const fieldsNotSent = requiredFields.filter(field => {
        //     return !movieData[field]
        // })

        // if (fieldsNotSent.length > 0) {
        //     throw new Error(`Missing fields: ${fieldsNotSent.toString()}`)
        // }

        // movieData.nowShowing = movieData.nowShowing === 'on'
        if (movieData.cast) {
            movieData.cast = movieData.cast.split(',')
        }

        console.log(movieData.cast)

        // const newMovie = new Movie(movieData)
        // newMovie.title = 'Something else'
        // newMovie.save()

        // This here is the same as the commented code above
        // Notice that the create function doesn't require us to run "save"
        Movie.create(movieData, function (err) {
            if (err) {
                res.send(`Error!! ${err.message}`)
            } else {
                // Now that we have our movies view setup on /movies,
                // we can ridrect to the main movies page
                res.redirect('/movies')
            }
        })

        // res.send('Movie creation')
    } catch (error) {
        console.error(error.message)
        res.status(501).send(`Something went wrong: ${error.message}`)
    }
}

const displayAllMoviesBasedOnRating = (req, res, next) => {
    const rating = req.params.rating
    Movie.find({ mpaaRating: rating })
}

const deleteMovie = (req, res, next) => {
    const id = req.params.movieId

    // Creates response for your route with the deleted count
    Movie.deleteOne({ _id: id })
    
    // Another approach using callback function
    // Movie.findByIdAndDelete(id, function (err, deletedMovie) {
    //     if (err) {
    //         res.send(`Cannot delete move: ${err}`)
    //     } else {
    //         if (!deletedMovie) {
    //             res.send('Cannot find movie with this ID')
    //         }
    //         res.send(deletedMovie)
    //     }
    // })
}

function getAllMovies(req, res, next) {
    Movie.find({}, function (err, moviesList) {
        if (err) {
            res.send('Error in finding all movies')
        } else {
            // Instead render a view that shows all the movies
            // res.send(moviesList)
            res.render('movies/index', {
                movies: moviesList
            })
        }
    })
}

module.exports = {
    newMovie: createNewMovieForm,
    createNewMovie,
    updateMovie,
    deleteMovie,
    getAllMovies
}