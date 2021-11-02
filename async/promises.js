function hello(user) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("hello " + user + ", I'm async");
            resolve(user);
        }, 1000);
    });
}

function talk(user) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Blah Blah Blah Blah...");
            // resolve(user);
            reject('Error in talk function');
        }, 1000);
    });
}

function bye(user) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bye", user);
            resolve();
        }, 2000);
    });
}

// Promises 
console.log("Starting Process...");

hello('Sergio')
    .then(talk)
    .then(talk)
    .then(talk)
    .then(bye)
    .then((user) => {
        console.log('Ending Process...');
    })
    .catch(error => {
        console.error("ERROR!!");
        console.error(error);
    });