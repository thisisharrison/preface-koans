// OBJECT (dictionary)

// CREATE
let restaurant = {
    menu: {
        main: "burger",
        // we have space, need ""
        side: "fries",
        "desert optional": "cake",
    },
    // in general use strings (we can use number but Object.keys return string)
    price: 100,
};
restaurant;

// READ
console.log(restaurant["menu"]);
// we can use a dot
console.log(restaurant.menu);

/** all the keys of object */
// Object -> a class with many object related methods
let keys = Object.keys(restaurant.menu);
keys;

/** all the values */
let values = Object.values(restaurant);
values;

// Destructuring
let { menu, price } = restaurant;
menu;
price;

let { main, side, whatIsThis } = restaurant.menu;
main;
side;
whatIsThis;

// UPDATE
// Spread Operator -> newVariable = {...original, newKey: newVal}
let newRestaurant = { ...restaurant, location: "wework", order: 100 };
newRestaurant;

let restaurant2 = Object.assign(newRestaurant, { chef: "Kevin" }, { customers: "Harry" });
restaurant2;

// DELETE
// MUTATION
delete restaurant2.chef;
restaurant2;
