function otherFunction(){
    itsBroken();
}

function itsBroken(){
    return 3 + x;
}

function itsBronkenAsync(){
    // Use try and catch inside Async Functions
    setTimeout(function(){
        try {
            return 3 + x;
        } catch (error) {
            console.error("The code Async is Broken");
            console.error(error.message);
        }
    });
}

try {
    otherFunction();
    // itsBronkenAsync();
} catch (error) {
    console.error("The code is Broken");
    console.error(error.message);
}