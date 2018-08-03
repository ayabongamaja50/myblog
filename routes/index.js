var express = require('express');
var router = express.Router();
var request = require('request');
var blogs = require('../db.json');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', blogs:blogs.blogs });

});

/* GET edit page. */
router.get('/edit_page', function(req, res, next) {
  res.render('edit_page', { title: 'Edit page' });
});

/* GET new_post_page. */
router.get('/new_post_page', function(req, res, next) {
res.render('new_post_page', { title: 'Post page', blogs:blogs.blogs });

  // create a variable to post
  let obj = {
    "title":req.body.title,
    "author":req.body.author,
    "date":req.body.date,
    "time":req.body.time,
    "content": req.body.content
  }

  //write logic that saves this data
  request.post({
    url:'http://localhost:8000/posts',
    body:obj,
    json:true
  },function(error,responsive,body){
  //  res.redirect('/')
  });
});
  

/* GET archive_page. */
router.get('/archive', function(req, res, next) {
  res.render('index', { title: 'archives', blogs:blogs.blogs });
});

/* GET blog1. */
router.get('/blog1', function(req, res, next) {
  res.render('blog1', { title: 'How to Be a Future Human' });
});

/* GET blog2. */
router.get('/blog2', function(req, res, next) {
  res.render('blog2', { title: 'Will Humanity Be Better Off in 2118?' });
});


/* GET blog3. */
router.get('/blog3', function(req, res, next) {
  res.render('blog3', { title: 'Magic Pills, Machine-Learning Skincare, and the Future of Health' });
});


module.exports = router;
