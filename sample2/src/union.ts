type Combine=number | string;

const combine=(input1:Combine,input2:Combine)=>{

    let result;
    if(typeof input1 === "number" && typeof input2 === "number"){
        result=input1+input2;
    }else{
        result=input1.toString()+"  "+input2.toString();
    } 
    return result;
}

const combineAge=combine(10,20);
console.log(combineAge);

const combineString=combine("ganesh","suthar");
console.log(combineString);
