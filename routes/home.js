// routes/home.js

var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res){
  res.render('home/welcome');
});

router.get('/about', function(req, res){
  res.render('home/about');
});

router.get('/contact', function(req, res){
  res.render('home/contact');
})

module.exports = router;