// routes/home.js

var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

// Home
router.get('/', function(req, res){
  Post.find({})
  .sort('-createdAt')
  .exec((err, posts) => {
    if(err) return res.json(err);
    res.render('home/welcome', {posts:posts}) ;
  });
});

//About
router.get('/about', function(req, res){
  res.render('home/about');
});

//Contact
router.get('/contact', function(req, res){
  res.render('home/contact');
})

module.exports = router;