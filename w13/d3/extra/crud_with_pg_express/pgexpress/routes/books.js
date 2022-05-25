const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/books')

router.get('/', bookCtrl.getBooks)
router.get('/:id', bookCtrl.getBookById)
module.exports = router