function hello(user, myCallback) {
    console.log("hello " + user + ", I'm async");
    setTimeout(function () {
        // console.log("I'm working");
        myCallback(user);
    }, 3000);
}

function bye(user, anotherCallback) {
    setTimeout(function () {
        console.log("Bye",user);
        anotherCallback();
    }, 3000);
}

console.log("Starting Process...");
hello('Sergio', function (user) {
    bye(user, function () {
        console.log('Ending Process...');
    });
});