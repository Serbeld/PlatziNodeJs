const fs = require('fs')

function readTxtFile(root, callback){
    fs.readFile(root,(err, data) => {
        callback(data.toString());
    });
}

function writeTxtFile(root, text, callback){
    fs.writeFile(root, text, function (err){
        if (err){
            console.error("We couldn't write the file");
        }
        else{
            console.log("We create the file correctly");
            callback(text);
        }
    });
}

function deleteTxtFile(root, callback){
    fs.unlink(root, callback);
}

readTxtFile(__dirname + '/file.txt', console.log);
writeTxtFile(__dirname + '/new_file.txt', "I'am a new file created with Js!!!", console.log);
// deleteTxtFile(__dirname + '/new_file.txt', console.log);