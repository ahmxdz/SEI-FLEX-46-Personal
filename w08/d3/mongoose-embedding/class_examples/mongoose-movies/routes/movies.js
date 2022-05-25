const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.index);
router.get('/superbad', moviesCtrl.showFilteredList);
router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', moviesCtrl.create);
// router.post('/:movieId/performs/:performerId', moviesCtrl.addPerformer)

module.exports = router;
