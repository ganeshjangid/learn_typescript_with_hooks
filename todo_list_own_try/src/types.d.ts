type AddTodo=(text:string)=>void;

type Todo={
    text:string;
    isCompleted:boolean;
}

type toggleTodo=(selectedTodo:number)=>void;