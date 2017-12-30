var somePromise = new Promise((resolve, reject) => {
    resolve('Hey it worked!');
    reject('It did not work :(');
});

somePromise.then((message) => {
    console.log(`Success. ${message}`)
}, (message) => {
    console.log(`Failure. ${message}`)
});




