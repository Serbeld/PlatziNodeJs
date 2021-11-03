// Log 
console.log('Something printed');
// Info
console.info('Something like info');
// Warning
console.warn('Something like warning');
// Error
console.error('Something like an error');

// Table
var tableA = [
    {
        Age: 24,
        Name: 'Sergio'
    },
    {
        Age: 22,
        Name: 'Iván'
    },
    {
        Age: 22,
        Name: 'Pedro'
    }
];

console.table(tableA);

// console group
console.group('Chat');
console.log("Sergio: Hello");
console.log("Ivan: Hello, How it's going?");
console.group("Conversation Blah");
console.log("Blah blah blah");
console.log("Blah blah blah");
console.log("Blah blah blah");
console.groupEnd("Conversation Blah");
console.log("Sergio: Good Byeeee!!");
console.log("Ivan: See Youuu!!");
console.groupEnd('Chat');

console.log("This text is next to console group");

// Count
console.log("Counter:");

console.count('Step');
console.count('Step');
console.count('Step');
console.count('Step');

// Reset
console.log("Reset")
console.countReset('Step');


console.count('Step');
console.count('Step');

