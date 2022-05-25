const mongoose = require('mongoose')

// shortcut for mongoose's Schema object
const Schema = mongoose.Schema
const reviewsSchema = new Schema({
    name: String,
    reviewSummary: String,
    reviewRating: Number

})

const directorSchema = new Schema({
    name: String,
    age: {
        type: Number,
        min: 10,
        max: 100
    }
})

const movieSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        default: function () {
            return new Date().getFullYear()
        },
        // Example of custom validation
        validate: {
            validator: function (value) {
                return value % 2 === 0
            },
            message: (props) => {
                return `${props.value} is not an even number`
            }
        }
    },

    reviews: [reviewsSchema],

    mpaaRating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R']
    },
    cast: {
        type: [String],
        // TODO: need to set validation for a minimum number of cast
        required: true
    },
    directors: [directorSchema],
    // reviews: [reviewsSchema],
    nowShowing: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)