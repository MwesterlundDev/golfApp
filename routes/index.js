const express = require('express');
const router = express.Router();

const course = require("./data/course");
const users = require("./data/users");
const outing = require("./data/outing");
const getHole = require("./data/getHole");

const debugGapp = true;

var email = '';

// route middleware to make sure a user is logged in
const ensureAuthenticated = (req, res, next) => {
    console.log('ensureAuthenticated:', req.isAuthenticated())
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/')
}

router.route('/gappemail').get(function(req, res, next) {
  //email = req.user.email;
  email = 'brianmendicino@gmail.com';
  res.send({'email': email});
});


router.route('/loadGolfApp').get(function(req, res, next) {
  if (debugGapp) {
    console.log('loading...', email);
  }
  
  // check for pending outing that user is in.
  const isInOuting = true;
  const page = isInOuting ? 'scorecard' : 'home';

  const data = {
    'page': page,
    'json': getHole
  }
  //stub course 
  res.send(data);
});



// GET outing by name
router.route('/outing/:name').get(function(req, res, next) {
  
  const name = req.params.name;

  //stub course  
  res.send(outing);
});

// GET course by name
router.route('/course/:name').get(function(req, res, next) {
  
  var name = req.params.name;

  //stub course  
  res.send(course);
});

// GET user by name
router.route('/user/:name').get(function(req, res, next) {
  
  var name = req.params.name;

  //stub send all users  
  res.send(users);

  
});

// GET outing by ID
router.route('/outing/:id').get(function(req, res, next) {
  
  var id = req.params.id;

  //stub outing 
  res.send(outing);

  
});


module.exports = router;
