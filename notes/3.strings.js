// STRINGS

// CREATE
let b = "burger";
let c = "";

// READ
console.log(b);
console.log(b[0]);

console.log(b.length);

// UPDATE
/** add to the back of string */
c = c + "can";
c;
c += "dle";
c;

/** change candle to handle */
/** handle to hand -> chaining method */
c = c.replace("c", "h").replace("le", "");
c;

// DELETE
let d = "dogg";
console.log(d.slice(0, 3));
d = d.slice(0, 3);
d;

// SPECIAL
d = d.toUpperCase();
d;

d = d.toLowerCase();
d;

let h = "Lau, Harrison";
let r = h.split(",");
r;
h;

// REGULAR EXPRESSION (ways to find and match strings based on complex patterns)
// Eg, looks for all the lowercase "r"
h = h.replace(/r/g, "_");
// Regular expression looks like => /regex/g
h;

console.log(typeof RegExp);
