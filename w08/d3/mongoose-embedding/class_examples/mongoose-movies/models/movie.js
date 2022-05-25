const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  reviewer: String,
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
}, {
  timestamps: true
})

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  },
  mpaaRating: String,
  reviews: [reviewsSchema],
  // cast: [String],
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'Performer'
  }],
  nowShowing: { type: Boolean, default: false },
  source: String,
}, {
  timestamps: true
});

// Set unique constraints by name and release year
movieSchema.index({ title: 1, releaseYear: 1 }, {unique: true})

// example of a method
movieSchema.methods.findReviewsByRating = function (rating, cb) {
  return mongoose.model('Movie').find({'reviews.rating': rating}, cb)
}

// example of a query method
// query methods can be chained
movieSchema.query.byRating = function (rating) {
  return this.where({ 'reviews.rating': rating })
}

module.exports = mongoose.model('Movie', movieSchema);