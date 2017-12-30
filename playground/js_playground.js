console.log("HEYA CONSOLE!");

//Functions are abstractions. Every line can be abstracted into a block.

var store_arr = [1,2,3,4,5];

for(var i=0; i<store_arr.length; i++) {
    console.log(store_arr[i]);
}

//or

function god_each(arr, action) {
    for(var i=0; i<arr.length; i++) {
        action(arr[i]);
    }
}

var sum = 0;
//Saved francize to dictionary
function francize(elem) {
    console.log(`Current Element: ${elem}. Sum so far: ${sum = sum + elem} `)
}

function lolli(elem) {
    var i = 0;
    var lolli = "";
    while(i < Math.random()*10000) {
        lolli = lolli + elem;
        i++;
    }
    console.log(lolli);
}

god_each(store_arr, francize);
god_each(store_arr, lolli);


//