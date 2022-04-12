/*
*Undefined and null are considered data type;
*The null is a data type that resepents a value;
*The undefined is a data type that represents a variable with an unassigned value.
*
*Hoisting
*JavaScript Hoisting refers to the process whereby the interpreter appears to move 
*the declaration of functions, variables or classes to the top of their scope, prior
*to execution of the code.
*/

var value = null;

var wait;

console.log(value);

console.log(typeof value);

value = "Ireland";

console.log(value);

console.log(wait);

wait = "Open the windows";

console.log(wait);