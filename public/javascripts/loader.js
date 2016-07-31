
'use strict'

// Initialize event handles on objects
gapp.scorecard.init();

// error callback for loading data
function error(data) {
    console.error('no data returned');
}

// success callback for loading data
function success(data) {
    gapp.events.send(gapp.events.DATA_LOADED, {});

    if (data.page === 'home') {
        gapp.events.send(gapp.events.LOAD_HOME, {'data': data.json});
    } 
    else if (data.page === 'scorecard') {
        gapp.events.send(gapp.events.LOAD_SCORECARD, {'data': data.json});
    }
	
}

function receivedEmail(data) {
    gapp.email = data.email;
    
    // make request to find which page to load.
    d3.request('/loadGolfApp')
        .mimeType("application/json")
        .response(function(xhr) { return JSON.parse(xhr.responseText); })
        .get()
        //.on('progress', hasProgress)
        .on('error', error)
        .on('load', success);
}

if (gapp.email === undefined) {
    d3.request('/gappemail')
        .mimeType("application/json")
        .response(function(xhr) { return JSON.parse(xhr.responseText); })
        .get()
        //.on('progress', hasProgress)
        .on('error', error)
        .on('load', receivedEmail);
}

