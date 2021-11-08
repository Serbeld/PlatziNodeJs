let sum = 0;

console.time('Loop Time');

console.time('All Blocks compiled');

for(let i = 0; i <= 50000000; i++){
    sum += 1;
}

console.timeEnd('Loop Time');


console.time('Loop Time 2');

for(let i = 0; i <= 100000000; i++){
    sum += 1;
}

console.timeEnd('Loop Time 2');

// We start the async process 
console.time('Asyncronic Time');
console.log("We start the async process ")
asyncronic()
.then(() => {
    console.timeEnd('Asyncronic Time');
});

console.timeEnd('All Blocks compiled');

function asyncronic(){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log("Here We Finish the async function process");
            resolve();
        })
    });
}