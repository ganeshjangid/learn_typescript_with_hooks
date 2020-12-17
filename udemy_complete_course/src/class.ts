class Vehicles {
    // color:string;
    // constructor(color:string){
    //     this.color=color;
    // }
    constructor(public color:string){

    }
    
    public drink():void{
        console.log("Hello World");
    }
    protected honk():void{
        console.log("Hello Honk");
    }
}
const vehcle=new Vehicles('orange');
vehcle.drink();
console.log(vehcle.color);

class Cars extends Vehicles {
    private testName="ganesh";
    public drink():void{
        console.log("Hello Baby.."+this.testName);    
        this.honk();
    }
}


const cars= new Cars('Red');
cars.drink();



