// interface todoProp{
//     name:string;
//     age:number;
// }

// const profiles:todoProp={
//     name:"ganesh",
//     age:10
// }

// console.log(profiles);

interface Vehicle{
    name:string;
    // year:number;
    // broken:boolean;
    summary():string;
}

const oldCivic={
    name:"Civic",
    year:2000,
    broken:true,
    summary():string{
        return `Name of Vahicle ${this.name}`;
    }   
};

const drink={
    name:"CoCo cola",
    year:2000,
    broken:true,
    summary():string{
        return `Name of Vahicle ${this.name}`;
    }   
};

const printCivic=(vehicle:Vehicle):void=>{
    console.log(vehicle.summary());
    console.log(vehicle.name);
}
printCivic(oldCivic);
printCivic(drink);