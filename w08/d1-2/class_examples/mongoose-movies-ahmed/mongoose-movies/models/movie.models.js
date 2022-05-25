const mongoose = require('mongoose')

// Shortcut for mongoose Schema Object
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    directors: [
        {
            name: String,
            age: Number,

        }
    ],
    nowShowing: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);