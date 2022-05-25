const express = require('express');
const router = express.Router();

const performerCtrl = require("../controllers/performers");
const performer = require('../models/performer');
router.get('/movies/:movieId/performers', function(req, res, next) {
  res.send("base performer route")
});

router.get('/performers/new', function(req, res, next) {

  res.render("./performers/new", {
    title: "Add To Cast"
  })
});



router.post('/movies/:movieId/performers/', function(req, res, next){
    performerCtrl.addToCast(req, res, next)

})

router.post('/performers/new', function(req, res, next){
  performerCtrl.newCast(req, res, next)

})



module.exports = router;
