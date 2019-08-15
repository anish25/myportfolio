var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anish Gandhi' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projets' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});


module.exports = router;