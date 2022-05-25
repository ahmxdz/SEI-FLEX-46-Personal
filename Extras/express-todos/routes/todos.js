var express = require('express');
var router = express.Router();
var TodoCtrl = require('../controllers/todos')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('<h1> This is the todos Router</h1>');
// });

// console.log(todoDb)

router.get('/', TodoCtrl.index);

router.get('/movies', TodoCtrl.showAllMovies)

router.get('/:ourVariable', TodoCtrl.show)



//router.get('/clothing/men/:product_name/pro/:product_id/color/:product_color')

module.exports = router;
