"use strict";
var today = new Date();
console.log(today.toDateString());
var apple = 10;
var objData = {
    name: "Ganesh suthar",
    age: 25,
    married: true
};
console.log(objData);
//Array 
var color = ['ganesh', 'suthar'];
console.log(color);
//Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.yourName = function () {
        console.log("Your Name");
    };
    return Car;
}());
var car = new Car();
car.yourName();
var logNumber = function (a) {
    console.log(a);
};
logNumber(10);
var test = ['tst'];
var test1 = { age: 10, address: "hello" };
var color1 = 'green';
console.log(color1);
// Function better 
var addTwo = function (a, b) {
    return a + b;
};
var numAdd = addTwo(10, 20);
console.log(numAdd);
var subtract = function (a, b) {
    a - b;
};
