/** ASSIGNMENT */

/** NUMBER */
// 1. Calculate your age in seconds
let age = 18 * 365 * 24 * 60 * 60;
console.log(age);

/** STRING */
// 2. Format this string (Hint: use `split`)
let messyString = "dO yOu kNOw wHat i mEAn?";
// Do you know what I mean?
// IMMUTABLE
let messyArray = messyString.split(" ");

// Slow Method:
let d = messyArray[0].toLowerCase()[0]; // "do"[0] -> "d"
d = d.toUpperCase();
let rest = messyArray[0].toLowerCase().slice(1); // chain methods
console.log(d + rest);
// python's slice
// [0: 1]

// Fast Methods:

// 3. Get the second character of each string (Hint: use index)
let string1 = "tYpe";
let string2 = "Some";
let string3 = "Numbers";
let string4 = "?!";

let output = string1[1] + string2[1] + string3[1] + string4[1];
output;

// 4. Create an echo effect. Eg. "PREFACE... Preface... preface... "
function echo(string) {
    let firstPart = string.toUpperCase() + "... ";

    let secondPart = capitalize(string) + "... ";

    let thirdPart = string.toLowerCase() + "... ";

    return firstPart + secondPart + thirdPart;
}

function capitalize(word) {
    let firstLetter = word[0].toUpperCase();
    let rest = word.toLowerCase().slice(1);

    return firstLetter + rest;
}

console.log(capitalize("something"));

// DO NOT EDIT this line
let p = echo("phoebe");
let h = echo("harry");
p;
h;
// should console.log "PREFACE... Preface... preface... "

// 5. Find if stringA is a substring of stringB. For example, "can" is a substring of "candle" (Hint: consider case and look at `includes` string method)
function isSubstring(stringA, stringB) {
    // "candle".includes("can")
    // Python: "p" in "phoebe"
    let a = stringA.toLowerCase();
    let b = stringB.toLowerCase();

    if (a.length > b.length) {
        // true block
        return a.includes(b);
    } else {
        // false block
        return b.includes(a);
    }
}

// DO NOT EDIT this line
console.log(isSubstring("can", "candle")); // should return true
console.log(isSubstring("can", "handle")); // should return false
console.log(isSubstring("candle", "can")); // should return true
console.log(isSubstring("Candle", "can")); // should return true

// 6. (HARD) Find the missing letter in the passed letter range and return it. If all letters are present, return undefined (Hint: upper bound is start of the string, lower bound is end of the string.)
function missingLetters(string) {
    // step1: create an alphabets array
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    // step2: strings like iterate like arrays
    // loop over argument: string. the index should match the alphabets.
    // if they do not equal, return the character that is supposed to be there
    for (let i = 0; i < string.length; i++) {
        let character = string[i];
        let correctCharacter = alphabets[i];
        if (character !== correctCharacter) {
            return correctCharacter;
        }
    }
    return;
}

console.log(missingLetters("abce")); // "d"
console.log(missingLetters("abcdefghjklmno")); // "i"
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")); // undefined

// 7. (HARD) Format dates to this format "1/1/2022" (Hint: use an object, use `split`)
let testDate1 = "Jan 1, 2022";
let testDate2 = "Jan 01, 2022";
let testDate3 = "January 1, 2022";
let testDate4 = "January 01, 2022";
// a. Create an object
let months = {
    Jan: 1,
    Feb: 2,
    // and so on
};
// b. Split the dates
let testDate1Arr = testDate1.split(" ");
// c. Get the first 3 letters of the month
let month = testDate1Arr[0].slice(0, 3);

// d. Replace the "," -> Convert to Number ('01' will become 1) -> Convert to String (1 will become '1')
let returnDate = months[month] + "/" + String(Number(testDate1Arr[1].replace(",", ""))) + "/" + testDate1Arr[2];
returnDate;

/** ARRAY */
// 8. Choose a random response from this array of phrases. (Hint: Look at `length`, `Math.floor` and `Math.random`)
let phrases = ["Sure thing", "That sounds good", "Yes definitly", "Maybe not today", "Computer says no"];
let randomIndex = Math.floor(Math.random() * phrases.length);
console.log(phrases[randomIndex]);

// 9. Create range function.
// including start, excluding stop (just like python's list(range(n)))
// 0       10
function range(start, stop) {
    let arr = [];
    for (let i = start; i < stop; i++) {
        arr.push(i);
    }
    return arr;
}

// 10. Fill in the missing numbers for this array.Expect to get back[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// splice(start index, delete count, item to insert)
// we find the index which we want to insert in-front of. we don't want to delete anything. item to insert is the missing number.
let numbers = [0, 2, 3, 5, 7, 9];
numbers.splice(1, 0, 1);
numbers;
numbers.splice(4, 0, 4);
numbers;
numbers.splice(6, 0, 6);
numbers;
numbers.splice(8, 0, 8);
numbers;

// do this in a for-loop
numbers = [0, 2, 3, 5, 7, 9];

for (let i = 0; i < numbers.length; i++) {
    // if numbers does NOT include i
    if (!numbers.includes(i)) {
        // add i in position i
        numbers.splice(i, 0, i);
    }
}
console.log(numbers);

/** OBJECT */
let menu = {};
// 11. How do you check if the menu is empty? (Hint: `Object.keys` or `Object.values`)
let isEmpty = Object.keys(menu).length == 0;
isEmpty;

// 12. Fill in the menu with appetizer, main, desert, drink. Think what should the values should be. (Hint: It should have prices per item)
menu.appetizer = {
    salad: 60,
    bread: 20,
};

menu.main = {
    fish: 80,
    pork: 70,
};

// repeat for desert and drink

// 13. Create an order from the menu. Calculate your total.
let myOrder = ["salad", "fish"];
let iOwe = 0;

for (let item of myOrder) {
    // we need to find out which category this item is in
    // Object.keys -> return array of keys
    // .find -> find the key which this condition is true `item in menu[key]`
    let category = Object.keys(menu).find((key) => item in menu[key]);
    console.log(category);
    iOwe += menu[category][item];
}
console.log(iOwe);

// 14. Un-order something from your order.
// starting at index 1, remove 1 item
myOrder.splice(1, 1);
myOrder;

// 15. Restaurant has a promotion. Change the prices of some items on the menu. Check if your order's total has changed.
// salad is 50% off
menu.appetizer.salad *= 0.5;

// copy the above and calculate new total
iOwe = 0;

for (let item of myOrder) {
    // we need to find out which category this item is in
    // Object.keys -> return array of keys
    // .find -> find the key which this condition is true `item in menu[key]`
    let category = Object.keys(menu).find((key) => item in menu[key]);
    console.log(category);
    iOwe += menu[category][item];
}
console.log(iOwe);

// 16. Find the total number of food on the menu (appetizer + main + desert + drink)
let categories = Object.keys(menu);
let total = 0;
for (let category of categories) {
    // look at the food inside this category
    // find the length (number of food)
    total += Object.keys(menu[category]).length;
}
total;
