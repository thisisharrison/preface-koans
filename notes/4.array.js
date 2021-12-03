// ARRAY (list)

// CREATE
let a = [1, 2, 3, 4, 5];

// READ
console.log(a[0]);
console.log(a.length);

// Destructure this array and assign variable names
let snacks = ["coke", "banana"];
// let drink = snacks[0]
// let food = snacks[1]
let [drink, food, whatIsThis] = snacks;
drink;
food;
whatIsThis;
snacks;

// UPDATE
// Mutation (vs Primitives)
// Insert in the back
a.push(6);
a;
// Insert in the front
a.unshift(0);
a;

// Concat does not change the object
a = a.concat([7]);
a;

// Spread operator -> ...
a = [...a, 8, 9];
a;

// DELETE
a;
// removed and mutated the array
// save the last index value to "nine"
nine = a.pop();
a;
nine;

zero = a.shift();
a;
zero;
