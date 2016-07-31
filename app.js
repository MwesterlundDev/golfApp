
const compression = require('compression');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const debugGapp = true;


// TODO: add passport authentication to google and facebook
// SIMPLE MIDDLEWARE TO DECIDE IF USER IS AUTHENTICATED
app.use(function (req, res, next) {
  if (debugGapp) {
    console.log('Time:', Date.now());  
  }

  const isAuthenticated = true;

  if (isAuthenticated) {
    next();
  } else {
    res.sendFile('login.html', { root: __dirname });
  }

});





// default GET to return index template
app.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});




app.use('/', routes);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
	console.log(err);
    res.status(err.status || 500);
    res.send({ error: err.message});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: err.message});
});


module.exports = app;
