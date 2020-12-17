//const arrays:(string |  number)[]=["ganesh","suthar","Madanlal",25];
const arrays:[string,string,string,number]=["ganesh","suthar","Madanlal",25];
//const arrays=["ganesh","suthar","Madanlal",25];
//const arrays:string[]=[];
console.log(arrays);
console.log(arrays[2]);
const myProfile=arrays.pop();
console.log("Remove last Value==>",myProfile);
console.log("After remove array value=>",arrays);

const mappedArray=arrays.map((val,idx):void=>{
    console.log(`No. ${idx} : ${val} `);
    //return `No. ${idx} : ${val}` ;
});
//console.log(mappedArray); 