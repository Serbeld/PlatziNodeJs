// env varibles 
let nombre = process.env.NOMBRE || 'User';
let web = process.env.WEB || 'https://github.com/Serbeld';

console.log('Hello ' + nombre);
console.log('My web page is ' + web);

// sudo npm install -g nodemon
console.log("This line is created and viewed By nodemon");