"use strict";
//const arrays:(string |  number)[]=["ganesh","suthar","Madanlal",25];
var arrays = ["ganesh", "suthar", "Madanlal", 25];
//const arrays=["ganesh","suthar","Madanlal",25];
//const arrays:string[]=[];
console.log(arrays);
console.log(arrays[2]);
var myProfile = arrays.pop();
console.log("Remove last Value==>", myProfile);
console.log("After remove array value=>", arrays);
var mappedArray = arrays.map(function (val, idx) {
    console.log("No. " + idx + " : " + val + " ");
    //return `No. ${idx} : ${val}` ;
});
//console.log(mappedArray); 
