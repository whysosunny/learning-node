const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var argv = yargs
    .options({
        a: {
            demand: true, //I need this input
            alias: 'address', //full form
            describe: 'Address to fetch the weather', //Description of argument
            string: true //Always parse the input as a string
        }
    })
    .help().alias('help','h')
    .argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(results.lat,results.lng,(errorMsg, weatherResults) => {
            if(errorMsg)
                console.log(errorMsg);
            else {
                console.log(`The current temperature at ${results.address} is: ${weatherResults.temp}F`);
            }
        });
    }
});




// currentTemp



