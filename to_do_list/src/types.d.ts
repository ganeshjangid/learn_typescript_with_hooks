type Todo={
    text:string;
    completed:boolean;
}
type toggleTodo= (selectedTodo:Todo)=>void;

type addToDo=(newTodo:string)=>void;