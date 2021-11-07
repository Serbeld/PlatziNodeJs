// Information about Operating System
const os = require('os');

// Architecture
console.log(os.arch());

// Linux, Windows or Mac
console.log(os.platform());

// Kernels
console.log(os.cpus().length);

// Const of the Operating System
// console.log(os.constants);

// Free memory 
const size = 1024;
function kb(bytes) {return bytes/size}
function mb(bytes) {return kb(bytes)/size}
function gb(bytes) {return mb(bytes)/size}

console.log(os.freemem());
console.log(kb(os.freemem()), 'KB');
console.log(mb(os.freemem()), 'MB');
console.log(gb(os.freemem()), 'GB');

// Path home
console.log(os.homedir());

// Hosname
console.log(os.hostname());

// Network Interface
// console.log(os.networkInterfaces());