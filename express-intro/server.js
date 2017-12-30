const express = require('express');
const app = express();


app.get('/', function(req,res) {
    // res.send(`<h1>Hello Express!</h1>`);
    res.send({
        name: 'sunny',
        age: 24,
        work: 'T-Hub'
    });
});


app.get('/bad', function(req,res) {
    // res.send(`<h1>Hello Express!</h1>`);
    res.send({
        errorMessage: 'There is an error',
        status: 'Check your code'
    });
});


app.get('/about', function(req, res) {
    res.send('About');
});

app.listen(3000);