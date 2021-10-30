function hello(user, myCallback) {
    console.log("hello " + user + ", I'm async");
    setTimeout(function () {
        // console.log("I'm working");
        myCallback(user);
    }, 1000);
}

function talk(callbackTalk){
    setTimeout(function(){
        console.log("Blah Blah Blah Blah...");
        callbackTalk();
    }, 1000);
}

function bye(user, anotherCallback) {
    setTimeout(function () {
        console.log("Bye",user);
        anotherCallback();
    }, 2000);
}

console.log("Starting Process...");
hello('Sergio', function (user) {

    talk(function(){
        talk(function(){
            talk(function(){
                bye(user, function () {
                    console.log('Ending Process...');
                });
            });
        });
    });

});