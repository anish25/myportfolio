var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anish Gandhi' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projets' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});


module.exports = router;