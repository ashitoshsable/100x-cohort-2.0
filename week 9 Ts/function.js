"use strict";
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Ashitosh");
function sum(a, b) {
    return a + b;
}
console.log("The value of 7+3 is " + sum(7, 3));
function isLegal(age) {
    return (age >= 18) ? true : false;
}
console.log(isLegal(18));
function legal(user) {
    return user.age >= 18 ? true : false;
}
const a = legal({
    firstName: "Ashitosh",
    lastName: "Sable",
    age: 12
});
console.log("The age of the person is " + a);
