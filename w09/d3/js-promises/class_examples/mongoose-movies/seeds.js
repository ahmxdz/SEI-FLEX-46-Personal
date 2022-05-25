 require('./config/database');// connect this script to the database
 const Movie = require('./models/movie');
 const Performer = require('./models/performer');
 const data = require('./data');

 // clear out all movies and performers to prevent dups
//  Downside: we need for movies deletion to complete before starting performers deletion
//  Movie.deleteMany({})
//      .then(function (results) {
//         console.log('Delete movie result', results)
//         return Performer.deleteMany({})
//     })
//     .then(function (results) {
//         console.log('Delete performer result', results)
//      });

const deleteMoviesPromise = Movie.deleteMany({})
const deletePerformersPromise = Performer.deleteMany({})

Promise.all([deleteMoviesPromise, deletePerformersPromise])
    .then(function (results) {
        console.log('Delete results')
        console.log(results)
    })
    .catch(function (err) {
        console.log('Catch error with deletions', err)
    })
    // After deleting let's add in Performers and movies
    .then(function () {
        return Performer.create(data.performers)
    })
    .then(function () {
        return Movie.create(data.movies)
    })
    .then(function (results) {
        console.log('Movie created results')
        console.log(results)
    })
    .then(function () {
        const movieUpdatePromises = data.movies.map(movie => {
            const title = movie.title
            const movieCast = data.performers
                .filter((performer) => performer.movies && performer.movies.length > 0)
                .filter(
                    (performer) => performer.movies.includes(title)
                )
                .map(performer => performer.name)
            
            return Performer.find({ name: { $in: movieCast } }).distinct('_id').then(function (results) {
                const listOfCastIdsForMovies = results
                movie.cast = listOfCastIdsForMovies
                console.log(movie)
                Movie.updateOne({ title }, movie, function () {
                    
                })
            })
        })
        return Promise.all(movieUpdatePromises)
    })
    .catch(function (err) {
        console.log('Catch errors with adding to db', err)
    })
    .finally(function () {
        process.exit()
    })


