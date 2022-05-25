var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/controllers.skills');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', skillsCtrl.deleteSkills)

module.exports = router;
