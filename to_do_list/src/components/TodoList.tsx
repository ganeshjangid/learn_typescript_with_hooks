import React from "react";
import ToDoListItems from "./TodoListItem";

interface ToDolistProps{
    todos:Array<Todo>;
    toggleTodo: toggleTodo;
}

const TodoList:React.FC<ToDolistProps>=({ todos,toggleTodo })=>{
    return <ul>
            {
                todos.map(todo =>{
                    return <ToDoListItems key={todo.text}  todo={todo} toggleTodo={toggleTodo}/>
                })
            }
    </ul>
};

export default TodoList;