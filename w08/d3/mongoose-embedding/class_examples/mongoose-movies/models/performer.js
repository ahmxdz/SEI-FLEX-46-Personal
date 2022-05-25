const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performerSchema = new Schema({
    name: String,
    dob: Date,
    yearOfFirstMovie: Number,
    netWorth: Number,
    imdbUrl: String
  }, {
    timestamps: true
})
  
module.exports = mongoose.model('Performer', performerSchema);
