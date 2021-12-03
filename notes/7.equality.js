// check if values equal (==)
console.log(0 == 0);
// but...
console.log(0 == "0");
// it doesn't check the type

// check if value and type are equal (===)
console.log(0 === 0);
console.log(0 === "0");

// check if not equal
// check if values equal (==)
console.log(0 != 0);
console.log(0 != "0"); // notice it's false, meaning they do equal based on value (not type)
console.log(0 !== 0);
console.log(0 !== "0");

// and
console.log(true && false);
console.log(false && true);
console.log(true && true);

// or
console.log(true || false);
console.log(false || true);
console.log(true || true);
