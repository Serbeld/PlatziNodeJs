async function hello(user) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("hello " + user + ", I'm async");
            resolve(user);
        }, 1000);
    });
}

async function talk(user) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Blah Blah Blah Blah...");
            resolve(user);
        }, 1000);
    });
}

async function bye(user) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bye", user);
            resolve();
        }, 2000);
    });
}

// Promises 

async function main(){
    let name = await hello("Sergio");
    await talk();
    await talk();
    await talk();
    await bye(name);
}


console.log("Starting Process...");
main();
console.log("Ending Process...");