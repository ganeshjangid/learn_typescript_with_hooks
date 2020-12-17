const profile={
    age:12,
    name:"Ganesh",
    lang:15,
    setAge(ages:number):void {
        this.age=ages;
        console.log(this.age);
    }
}

const {age}:{age:number}=profile;
console.log(age);
const pro=profile;
pro.setAge(20);
console.log(age);