const express = require('express');
const apiCtrl = require('../controllers/puppies');

const router = express.Router();

/* GET users listing. */
router.get('/', apiCtrl.index);
router.post('/', apiCtrl.create);

module.exports = router;
