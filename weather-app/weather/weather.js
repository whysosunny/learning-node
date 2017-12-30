const request = require('request');
const weather_key = '6686771985eecf524c6b18c52c2c8dfd';

getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${weather_key}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temp: body.currently.temperature,
                apparent_temp: body.currently.apparentTemperature
            });
        } else {
            callback("Unable to fetch data.");
        }

    });
};

module.exports = {
    getWeather
};