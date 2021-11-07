const http = require('http');

http.createServer(function(request, respnse){
    // Get a request
    console.log("New Request!");
    console.log(request.url);

    switch(request.url){
        case '/':
            // Give a response 
            respnse.writeHead(201, {'Content-Type':'text/plain'});
            respnse.write("Hi, I know How to Use HTTP parting from Node JS");        
            break;
        case '/hello':
            respnse.write("Hi, How it' going?");
            break;
        default:
            respnse.write("Error 404: Page Not Found")
    }

    respnse.end();
}).listen(8085);

console.log("Listening http Port 8085");
