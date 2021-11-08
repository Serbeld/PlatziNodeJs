function asyncMyFunction(Callback) {
    //All my code async
    setTimeout(function () {
        // let z = 5;
        try {
            let a = 3 + z;
            console.log("Done!!!, My data is", a);
            // Callback(null, a);
        } catch (e) {
            console.error("We got an error!!!");
            console.error(e.message);
            // Callback(e);
        }
    }, 1000);
}

// asyncMyFunction(function(err, dato){
//     if(err){
//         console.error("We got an error!!!");
//         console.error(err.message);
//         return false;
//     }
//     console.log("Done!!!, My data is", dato);
// });

asyncMyFunction();