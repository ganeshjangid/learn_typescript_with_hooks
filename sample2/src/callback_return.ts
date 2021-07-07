function addTwo(num1:number,num2:number):number{
    return num1+num2;
}

function printResult(num:number):void{
    console.log("Result :",num)
}

function addTwoHandle(num1:number,num2:number,cb:(num:number)=> void){
    const result=num1+num2;
    cb(result);
}

addTwoHandle(10,20,(result)=>{
    console.log(result);
})


function generateError(message:string,code:number):never{
    throw {message,code};
}

generateError("Hello this is error ther",200);




const result=printResult(addTwo(10,20));
//console.log(result);

let combineValue:(a:number,b:number)=>number;

combineValue=addTwo;
//combineValue=0;
//combineValue=printResult;

console.log(combineValue(10,20));