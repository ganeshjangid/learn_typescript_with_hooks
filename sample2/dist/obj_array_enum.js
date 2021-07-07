"use strict";
// const person:{
//     name:string;
//     age:number
// }={
//     name:"ganesh",
//     age:27
// }
// const person:object={
//     name:"ganesh",
//     age:27
// }
// const person={
//     name:"ganesh",
//     age:27,
//     habbies:["coding","reading","watching movie"]
// }
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read-Only-User"] = 1] = "Read-Only-User";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
var person = {
    name: "ganesh",
    age: 27,
    habbies: ["coding", "reading", "watching movie"],
    role: Role.Admin
};
var favi;
favi = ["ganeh"];
console.log(person.name);
for (var _i = 0, _a = person.habbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
if (person.role === Role.Admin) {
    console.log("Read only user");
}
//# sourceMappingURL=obj_array_enum.js.map