const request = require('request');
const weather_key = '6686771985eecf524c6b18c52c2c8dfd';


geocodeAddress = (search_string, callback) => {
    var encodedAddress = encodeURIComponent(search_string);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if(error)
            callback(error);
        else if (body.status === "ZERO_RESULTS")
            callback("Unable to find address");
        else if (body.status === "OK") {
            const location = body.results[0].geometry.location;
            callback(undefined, {
                address : body.results[0].formatted_address,
                lat: location.lat,
                lng: location.lng
            });
            
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Latitude: ${location.lat}`);
            // console.log(`Longitude: ${location.lng}`);
        }

    });
};


getTemp = (location) => {
    
};

module.exports = {
    geocodeAddress,
    getTemp
};