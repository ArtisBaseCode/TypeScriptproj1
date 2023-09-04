"use strict";
let greet;
greet = () => {
    console.log("hello, world");
};
const add = (a, b, c = 0) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 3);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
