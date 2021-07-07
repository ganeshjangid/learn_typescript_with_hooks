const button=document.querySelector("button");
const num1=document.getElementById("num1");
const num2=document.getElementById("num2");

const addTwoNo=(a,b)=>{
    console.log(typeof(a));
    console.log(typeof(b));
    return a+b
}

//console.log(addTwoNo(10,20));


button.addEventListener("click",()=>{
    const result=addTwoNo(num1.value,num2.value);
    console.log(result);
    document.getElementById("showResult").innerHTML=result;
});
