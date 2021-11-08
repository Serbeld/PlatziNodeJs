// Buffer 4 postions
// let buffer = Buffer.alloc(4);
// Output: <Buffer 00 00 00 00>
// console.log(buffer);

// let buffer = Buffer.from([1,2,3]);
// Output: <Buffer 01 02 03>
// console.log(buffer);

// let buffer = Buffer.from('Hello');
// Output: Hello
// console.log(buffer.toString());

// --

let abc = Buffer.alloc(26);
// console.log(abc);

for(let i = 0; i < 26; i++){
    abc[i] = i + 97;
}

console.log(abc.toString());