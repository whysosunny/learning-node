var getUser = (id, callback) => {
    var user = {
        id : id,
        name: 'Thaniye'
    };

    console.log("first");

    setTimeout(() => callback(user), 3000);
};


getUser(1, (userObj) => {
    console.log("second");
    console.log(userObj);
});