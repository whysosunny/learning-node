const request = require('request');


var geocodeAddress = new Promise((resolve, reject) => {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=hyderabad',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            resolve(body.results[0].formatted_address);
        } else {
            reject(error);
        }
    });
    
});

geocodeAddress.then((result) => {
    console.log(`Success. Result: ${result}`);
}, (errorMsg) => {
    console.log(`Failure: ${errorMsg}`);
});