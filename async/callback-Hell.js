function hello(user, myCallback) {
    console.log("hello " + user + ", I'm async");
    setTimeout(function () {
        // console.log("I'm working");
        myCallback(user);
    }, 1000);
}

function talk(callbackTalk) {
    setTimeout(function () {
        console.log("Blah Blah Blah Blah...");
        callbackTalk();
    }, 1000);
}

function bye(user, anotherCallback) {
    setTimeout(function () {
        console.log("Bye", user);
        anotherCallback();
    }, 2000);
}

function conversation(user, steps, callbackConv) {
    if (steps > 0) {
        talk(function () {
            conversation(user, (steps - 1), callbackConv);
        });
    }
    else {
        bye(user, callbackConv);
    }
}

console.log("Starting Process...");
hello('Sergio', function (user) {
    conversation(user, 3, function () {
        console.log('Ending Process...');
    });
});