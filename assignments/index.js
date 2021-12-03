/** ASSIGNMENT */

/** NUMBER */
// 1. Calculate your age in seconds
// TODO

/** STRING */
// 2. Format this string (Hint: use `split`)
let messyString = "dO yOu kNOw wHat i mEAn?";
// Expect: Do you know what I mean?
// TODO

// 3. Get the second character of each string (Hint: use index)
let string1 = "tYpe";
let string2 = "Some";
let string3 = "Numbers";
let string4 = "?!";

let output; // TODO

// 4. Create an echo effect. Eg. "PREFACE... Preface... preface... "
function echo(string) {
    // TODO
}

// Hint: make a capitalize function
function capitalize(word) {
    // TODO
}

// Test it:
console.log(capitalize("something"));

// DO NOT EDIT this line
let p = echo("preface");
console.log(p); // should console.log "PREFACE... Preface... preface... "

// 5. Find if stringA is a substring of stringB. For example, "can" is a substring of "candle"
// Hint: consider case and look at `includes` string method
function isSubstring(stringA, stringB) {
    // TODO
}

// DO NOT EDIT this line
console.log(isSubstring("can", "candle")); // should return true
console.log(isSubstring("can", "handle")); // should return false
console.log(isSubstring("candle", "can")); // should return true
console.log(isSubstring("Candle", "can")); // should return true

// 6. (HARD) Find the missing letter in the passed letter range and return it. If all letters are present, return undefined (Hint: upper bound is start of the string, lower bound is end of the string.)
function missingLetters(string) {
    // TODO
    return;
}

missingLetters("abce"); // "d"
missingLetters("abcdefghjklmno"); // "i"
missingLetters("abcdefghijklmnopqrstuvwxyz"); // undefined

// 7. (HARD) Format dates to this format "1/1/2022"
// Hint: use an object, use`split`
let testDate1 = "Jan 1, 2022";
let testDate2 = "Jan 01, 2022";
let testDate3 = "January 1, 2022";
let testDate4 = "January 01, 2022";
// TODO

/** ARRAY */
// 8. Choose a random response from this array of phrases. (Hint: Look at `length`, `Math.floor` and `Math.random`)
let phrases = ["Sure thing", "That sounds good", "Yes definitly", "Maybe not today", "Computer says no"];
// TODO

// 9. Create range function.
// including start, excluding stop (just like python's list(range(n)))
function range(start, stop) {
    // TODO
}

// 10. Fill in the missing numbers for this array.Expect to get back[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Hint: splice(start index, delete count, item to insert)
// we find the index which we want to insert in-front of. we don't want to delete anything. item to insert is the missing number.
let numbers = [0, 2, 3, 5, 7, 9];

/** OBJECT */
let menu = {};
// 11. How do you check if the menu is empty? (Hint: `Object.keys` or `Object.values`)

// 12. Fill in the menu with appetizer, main, desert, drink. Think what should the values should be. (Hint: It should have prices per item)

// 13. Create an order from the menu. Calculate your total.

// 14. Un-order something from your order.

// 15. Restaurant has a promotion. Change the prices of some items on the menu. Check if your order's total has changed.

// 16. Find the total number of food on the menu (appetizer + main + desert + drink)
