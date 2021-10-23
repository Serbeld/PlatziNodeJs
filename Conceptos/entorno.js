// env varibles 
let nombre = process.env.NOMBRE || 'User';
let web = process.env.WEB || 'https://github.com/Serbeld';

console.log('Hello ' + nombre);
console.log('My web page is ' + web);