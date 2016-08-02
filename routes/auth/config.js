// config/auth.js

/*
    Google Cloud Platform
    https://console.cloud.google.com/apis/

    project ID: gobble-auth
    clientID: 354121849791-m12hcmaqmp9qu2tnodaslbuhp4meuq48.apps.googleusercontent.com
    secret: V8WzS-M9Ao_v3ZReP0A6zgPy

    Facebook
    gmail= fbauthacct@gmail.com : kb#ECAF!
    facebook= fbauthacct@gmail.com : kb#ECAF!
*/

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1008814482571857',
        'clientSecret'  : 'f30961ee73deb92898976310ffaf2e65', // your App Secret
        'callbackURL'   : 'http://localhost:8787/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : '354121849791-m12hcmaqmp9qu2tnodaslbuhp4meuq48.apps.googleusercontent.com',
        'clientSecret'  : 'V8WzS-M9Ao_v3ZReP0A6zgPy',
        'callbackURL'   : 'http://localhost:8787/auth/google/callback'
    }

};