"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
console.log(sumOfAge({
    name: "Ashitosh",
    age: 21
}, {
    name: "Rohan",
    age: 21
}));
