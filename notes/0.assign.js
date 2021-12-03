// Assigning Constants: Cannot be reassigned
const c = "batman";
// c = "robin"

// Assignment Variables: Can be reassigned
let f = "potato";
f = "fries";
console.log(f);

// Scopes: using let, block scope x (inside {}) is 20, while outside of {}, it's still 10
let x = 10;

if (true) {
    let x = 20;
    x;
}
x;

// Scopes: using var, when we set x to 20 inside the {} it changed the outside x as well
var y = 10;

if (true) {
    var y = 20;
    y;
}
y;

// assign b to the right hand expression
let b = 10;
// assigning a to the value of b (not B)
let a = b;
b = 0;
a;
// expression results in values ("string", 10...)

function double(x) {
    x = x * 2;
}

let money = 100;
double(money); // double(100)
money; // 100
