var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/controllers.skills');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('views.skills.ejs', { title: 'My Skills' });
    
// });
router.get('/', skillsCtrl.createList)

router.post('/', skillsCtrl.push)

module.exports = router;
