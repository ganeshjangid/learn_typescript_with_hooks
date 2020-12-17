const today:Date=new Date();
console.log(today.toDateString());

let apple:number=10;


interface objTypes{
    name:string;
    age:number;
    married:boolean
}


const objData:objTypes={
    name:"Ganesh suthar",
    age:25,
    married:true
};

console.log(objData);


//Array 
let color:string[]=['ganesh','suthar'];
console.log(color);

//Classes

class Car {   
    yourName(){
        console.log("Your Name");
    }

}
let car:Car=new Car();
car.yourName();



//Function

interface logProps{
    i:number;
}

const logNumber:(i:number)=>void=(a)=>{
   console.log(a);
}
logNumber(10);


const test:string[]=['tst'];
const test1:{age:number,address:string}={age:10,address:"hello"};

const color1='green';
console.log(color1);

// Function better 

const addTwo=(a:number,b:number):number =>{
    return a+b;
}
const numAdd=addTwo(10,20);
console.log(numAdd);

const subtract=(a:number,b:number)=>{
 a-b;
};

const todayWeather={
    date:new Date(),
    weather:'Sunny'
}

const logWeather=({date,weather}:{date:Date,weather:string}):void=>{
    console.log(date);
    console.log(weather);
}

logWeather(todayWeather);





