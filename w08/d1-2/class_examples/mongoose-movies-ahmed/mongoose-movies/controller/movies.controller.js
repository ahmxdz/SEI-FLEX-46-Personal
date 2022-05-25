const { render } = require("../../../../../express-dev-skills-lab/server");
const Movie = require("../models/movie.models");

// GET Home Page
const createMovies = (req, res, next) => {
    console.log('movie created')
    res.render('movies/newMovie')
}


const createNewMovies = (req, res, next) => {
    
    try{      
        const movieData = req.body  
        
        // const requiredFields = []
        // const fieldsNotSent = requiredFields.filter(field =>{
        //     return !movieData[field]
        // })
        // if (fieldsNotSent.length > 0) {
        //     throw new Error(`Missing fields: ${fieldsNotSent.toString()}`)
        // }
        console.log('-----------')
        // movieData.nowShowing = movieData.nowShowing === 'on'
        movieData.cast = movieData.cast.split(',')

        console.log(movieData)
        console.log('-----------')
        // const newMovie = new Movie({
        //     title: 'Titanic',
        //     releaseYear: 1998,
        //     nowPlaying: false,
        //     mpaaRating: 'PG-13'
        // })
        // newMovie.save()
        res.send('Movie creation')
        Movie.create(movieData, function(req, res, next){


        })
    }catch(error){
    res.status(501).send(`Something went Wrong: ${error.message}`)
}
}

const displayAllMoviesBasedOnRating = (req, res, next) => {
    const rarting = req.params.rating
    Movie.find({ mpaaRating: rating})

}

// const deleteMovie = async (req, res, next) =>{
//     const id = req.params.movieId
//     const deletedResults = await Movie.findByIdAndDelete(id)
//     console.log(deletedResults)
//     res.send("deleted")
// }

// creates response for your route with the deleted count
// const deleteMovie = (req, res, next) => {
//     const id = req.params.movieId
//     Movie.deleteOne({_id: id})

// }


// another approach using callback functions
const deleteMovie = (req, res, next) => {
    const id = req.params.movieId
    Movie.findByIdAndDelete(id, function (err, deletedMovie) {
        if (err) {
            res.send(`Cannot delete move: ${err}`)
        } else {
            if (!deletedMovie) {
                res.send('Cannot find movie with this ID')
            }
            res.send(deletedMovie)
        }
    })
}

const getAllMovies = (req, res, next) => {

    Movie.find({}, function(err, moviesList){
        res.render('movies/index',{
            movies: moviesList
        })
        console.log(err)
        console.log(moviesList)

        if (err) {
            res.send("Error in finding all movies")

        }else{
            res.send(moviesList)
        }
        
    })
}

module.exports = {
    new: createMovies,
    createMovies,
    createNewMovies,
    deleteMovie,
    getAllMovies


}