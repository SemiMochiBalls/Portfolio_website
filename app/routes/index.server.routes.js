//Name: Sachi Sabijon Reyes
//ID:301266968
// OCT 2,2023
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render the index view with the title 'Home'
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  // Render the about view with the title 'About'
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  // Render the projects view with the title 'Projects'
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  // Render the contact view with the title 'Contact'
  res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
  // Render the services view with the title 'Services'
  res.render('services', { title: 'Services' });
});

module.exports = router;