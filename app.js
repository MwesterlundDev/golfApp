
const compression = require('compression');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({ 
  secret: 'EpkMTBdiXK2WQkQZeK1jXkdb0vhC8AJUAwJCzcuASdxdODBj7Zx8u2YETg9M2Hf',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./routes/index'));

const authPassport = require('./routes/auth/passport')(app, passport);


// route to login or home page
app.get('/', function(req, res, next) {
  console.log('fwewfwrgerwgergregregregergregregreg', req.isAuthenticated())
    if (req.isAuthenticated()) {
        res.sendFile('index.html', { root: __dirname });
    } else {
        res.sendFile('login.html', { root: __dirname });
    }
});

// route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});



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
