var express = require('express');
var router = express.Router();

var course = require("./data/course");
var users = require("./data/users");
var outing = require("./data/outing");


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
