"use strict";
// interface todoProp{
//     name:string;
//     age:number;
// }
var oldCivic = {
    name: "Civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "Name of Vahicle " + this.name;
    }
};
var drink = {
    name: "CoCo cola",
    year: 2000,
    broken: true,
    summary: function () {
        return "Name of Vahicle " + this.name;
    }
};
var printCivic = function (vehicle) {
    console.log(vehicle.summary());
    console.log(vehicle.name);
};
printCivic(oldCivic);
printCivic(drink);
