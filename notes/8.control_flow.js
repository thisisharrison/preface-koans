// Control Flow

let array = [1, 2, 3];

// traditional and most common approach
// for (where do we start; when do we keep going; how many steps to take)
for (let i = 0; i < array.length; i++) {
    console.log(`index is: `, i);
    console.log(`item is: `, array[i]);
}

// return item inside the array
for (let item of array) {
    console.log(item);
}

// return indexes in string
for (let stringIndex in array) {
    console.log(stringIndex);
    console.log(typeof stringIndex);
}
