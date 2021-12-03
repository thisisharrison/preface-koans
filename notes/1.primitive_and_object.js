/**
 * 1) Data Types - Primitives and Objects
 * 2) Functions - the same
 * 3) Conditions and Control Flows - the same
 * 4) Libraries - browser defined Libraries (React, tensorflowjs)
 */

// PRIMITIVES - cannot change (aka Immutable)
// 10
// "string"
// undefined
// null
// true / false

"use strict"; // <-- strict javascript
let b = "banana";
// b[0] = "B" // This should have error
b;

let a = [1, 2, 3, 4];
a[0] = 100;

console.log(typeof "string");
console.log(typeof "string");

console.log(typeof 10);
console.log(typeof "string");
console.log(typeof undefined);
console.log(typeof null); //<- interesting error in the programming language (https://2ality.com/2013/10/typeof-null.html)
console.log(typeof true);
console.log(typeof false);

undefined; // unintentional missing value
null; // intentional missing value

// Example of how we'll get an undefined
let variable;
variable;

// Example of how we'll use a null
let startup = null;
startup = 10000000000000;

// OBJECTS & FUNCTION - can change
a = []; // <- Array = Python's list
b = {}; // <- Object = Python's dictionary
function double(x) {
    x = x * 2;
}

console.log(typeof a);
console.log(typeof b);
console.log(typeof double);
