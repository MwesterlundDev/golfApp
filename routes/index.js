var express = require('express');
var router = express.Router();

var course = require("./data/course");
var users = require("./data/users");
var outing = require("./data/outing");

router.route('/').get(function(req, res, next) {
<<<<<<< HEAD
  res.send('hello');
=======
  res.send('Hello World');


});



// GET course by name
router.route('/course/:name').get(function(req, res, next) {
  
  var name = req.params.name;

  //stub course  
  res.send(course);

  
>>>>>>> 59b621e4b37174d39a041b223cfd8299764ecb2b
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
