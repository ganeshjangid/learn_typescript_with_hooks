"use strict";
var profile = {
    age: 12,
    name: "Ganesh",
    lang: 15,
    setAge: function (ages) {
        this.age = ages;
        console.log(this.age);
    }
};
var age = profile.age;
console.log(age);
var pro = profile;
pro.setAge(20);
console.log(age);
