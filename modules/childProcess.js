const { exec , spawn } = require('child_process');

// // Directory On Linux
// exec('ls -la', (err, stdout, sterr) => {
//     if (err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

// // Open consola.js
// exec('node modules/consola.js', (err, stdout, sterr) => {
//     if (err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let process = spawn('ls', ['-la']);

// console.log(process.pid);
// console.log(process.connected);

process.stdout.on('data', function(dato){
    console.log("The code is ok?");
    console.log(process.killed);
    console.log(dato.toString())
});

process.on('exit', function(){
    console.log('The process ends successfully');
});
