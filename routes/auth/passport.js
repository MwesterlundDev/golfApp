
// var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;

// load up the user model
//var User = require('../app/models/user');

// load the auth variables
const config = require('./config');
var users = [];

module.exports = function(app, passport) {

    // TEMPORARY USER AUTH BEGIN
            // array to hold logged in users
            
            app.locals.usersTokens = [];

            const findUserByEmail = (email, callback) => {
                const len = users.length;
                for (var i = 0; i < len; i++) {
                    let user = users[i];
                    //console.log('we are using user: ', user);
                    if (user.id === email) {
                        return callback(null, user);
                    }
                }
                return callback(null, null);
            };
    // TEMPORARY USER AUTH END


    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
        // done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        findUserByEmail(id, function (err, user) {
            done(err, user);
        });
        /*
        User.findById(id, function(err, user) {
            done(err, user);
        });
        */
    });
    

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({

        clientID        : config.googleAuth.clientID,
        clientSecret    : config.googleAuth.clientSecret,
        callbackURL     : config.googleAuth.callbackURL,

    },
    function(accessToken, refreshToken, profile, done) {
        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {
            findUserByEmail(profile.id, function(err, user) {
				if (err) {
					return done(err);
				}
                
				if (!user) {
					console.log("AUTO REGISTRATION")
                    var prof = {
                        id: profile.id,
                        accessToken: accessToken,
                        name: profile.displayName,
                        email: profile.emails[0].value
                    }
					users.push(prof);
					app.locals.usersTokens.push({email: profile.emails[0].value, token: accessToken});
					return done(null, profile);
				}
                
				console.log("ALREADY REGISTERED")
				return done(null, user);
			});
            /*
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return done(err, user);
            });
            */
        });
    }));

    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/',
                    failureRedirect : '/'
            }));




    // code for facebook (use('facebook', new FacebookStrategy))
    // facebook routes


    /*
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser          = new User();

                    // set all of the relevant information
                    newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });

    }));
    */
};
