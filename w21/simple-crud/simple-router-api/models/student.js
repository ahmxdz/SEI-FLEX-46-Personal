const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    books: {
        type: Array
    },
    movies: {
        type: Array
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', studentSchema);
