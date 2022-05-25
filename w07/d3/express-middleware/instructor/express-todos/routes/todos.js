const express = require('express');

const router = express.Router();
const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);

router.get('/new', todosCtrl.new);
router.get('/:id', todosCtrl.show);
router.delete('/:id', todosCtrl.destroy);

module.exports = router;
