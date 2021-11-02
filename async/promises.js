function hello(user) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("hello " + user + ", I'm async");
            resolve(user);
        }, 1000);
    });
}

// Promises 
console.log("Starting Process...");
hello('Sergio')
    .then((user) => {
        console.log('Ending Process...');
    })