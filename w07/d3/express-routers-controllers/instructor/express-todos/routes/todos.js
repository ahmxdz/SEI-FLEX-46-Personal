const express = require('express');

const router = express.Router();
const todosCtrl = require('../controllers/todos');

/* GET users listing. */
// /todos

router.get('/', todosCtrl.index);
router.get('/:id', todosCtrl.show);

module.exports = router;
