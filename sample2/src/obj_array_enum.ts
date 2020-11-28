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

enum Role {"Admin","Read-Only-User","Author"};

const person={
    name:"ganesh",
    age:27,
    habbies:["coding","reading","watching movie"],
    role:Role.Admin
}

let favi:string[];
favi=["ganeh"];

console.log(person.name);

for(const hobby of person.habbies){
    console.log(hobby.toLocaleUpperCase());
}


if(person.role === Role.Admin){
    console.log("Read only user");
}