"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    // color:string;
    // constructor(color:string){
    //     this.color=color;
    // }
    function Vehicles(color) {
        this.color = color;
    }
    Vehicles.prototype.drink = function () {
        console.log("Hello World");
    };
    Vehicles.prototype.honk = function () {
        console.log("Hello Honk");
    };
    return Vehicles;
}());
var vehcle = new Vehicles('orange');
vehcle.drink();
console.log(vehcle.color);
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testName = "ganesh";
        return _this;
    }
    Cars.prototype.drink = function () {
        console.log("Hello Baby.." + this.testName);
        this.honk();
    };
    return Cars;
}(Vehicles));
var cars = new Cars('Red');
cars.drink();
