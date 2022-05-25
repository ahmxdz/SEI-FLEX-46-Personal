const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.index);
router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', moviesCtrl.create);
<<<<<<< HEAD

// router.post('/:movieId/reviews', moviesCtrl.createReview)
=======
>>>>>>> 2f26909b832220a60614c61ef9214de831a1916c

module.exports = router;
