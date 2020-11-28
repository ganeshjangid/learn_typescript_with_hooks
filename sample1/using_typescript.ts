const button=document.querySelector("button");
const num1=document.getElementById("num1") as HTMLInputElement;
const num2=document.getElementById("num2") as HTMLInputElement;

const addTwoNo=(a:number,b:number)=>{
    console.log(typeof(a));
    console.log(typeof(b));
    return a+b
}

//console.log(addTwoNo(10,20));


button.addEventListener("click",()=>{
    const result=addTwoNo(+num1.value,+num2.value);
    console.log(result);
    //document.getElementById("showResult").innerHTML=result;
});
