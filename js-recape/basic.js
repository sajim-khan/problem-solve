//var, let, const

// you can redeclare & reassign
var a = 5;
var a = 10;
console.log(a);

// you can not redeclare but you can reassign
let b = 5;
b= 15;
console.log(b);

// you can not redeclare & reassign
const x = 10;
//const x = 15; // do not work
const y = 15;
console.log(`Value of x is: ${x} and Value of y is: ${y}`);


