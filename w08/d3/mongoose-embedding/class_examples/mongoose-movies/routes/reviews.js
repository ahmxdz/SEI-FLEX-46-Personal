const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews')

router.post('/movies/:movieId/reviews', function (req, res, next) {
    reviewsCtrl.create(req, res, next)
})

router.delete('/movies/:movieId/reviews/:reviewId', function (req, res, next) {
  console.log('We are trying to delete')
    reviewsCtrl.deleteReview(req, res, next)
})

module.exports = router;
