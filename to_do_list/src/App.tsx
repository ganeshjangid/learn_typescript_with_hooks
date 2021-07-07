import React,{Fragment, useState} from 'react';
import ToDoList from "./components/TodoList";
import AddForm from "./components/AddForm";

const todosinit:Array<Todo>=[
    {text:"walk dogs",completed:true},
    {text:"walk app",completed:false}
]

const App:React.FC=()=>{
    const [todos,setToDo]=useState(todosinit);

    const toggleTodo:toggleTodo=selectedTodo =>{
        const newTodos=todos.map(todo =>{
            if(todo === selectedTodo){
                return {
                    ...todo,
                    completed:!todo.completed
                }
            }
            return todo;
        })
        setToDo(newTodos);
    }

    const addToDo:addToDo=newTodo =>{
        newTodo.trim() !== "" &&
        setToDo([...todos,{text:newTodo,completed:false}]);        
    }

    return <Fragment>
            <ToDoList todos={todos} toggleTodo={toggleTodo}/>
            <AddForm addToDo={addToDo} />
        </Fragment>
}   

export default App;