const addTwono=(n1:number,n2:number,showResult:boolean,resultPharse:string)=>{

    const result=n1+n2;
    if(showResult){
        console.log(resultPharse+result);
    }else{
        return result;
    }
    
}

let num1:number;
num1=10;
const num2=10.5;
const printScript=true;
const resultPharse="Result is  : ";

addTwono(num1,num2,printScript,resultPharse);
