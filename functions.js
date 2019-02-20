"use strict";
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(5, 6));
let mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum(2, "8"));
function getName(firstName, lastName) {
    // ? makes the parameter optional
    if (lastName == undefined) {
        lastName = firstName;
    }
    return firstName + " " + lastName;
}
console.log(getName("Billy"));
function myVoidFunc() {
    return;
}
