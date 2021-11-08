process.on('beforeExit', () => {
    console.log("Hey, The process is ending");
});

process.on('exit', () => {
    console.log("Hey, The process just end");
});

process.on('uncaughtException', (err, orig) => {
    console.log("We forget to catch an error");
    console.error(err.message);
});

functionThatDoesntExist();

// If the error exist, this won't compile
console.log("Hey, this is a message after error");