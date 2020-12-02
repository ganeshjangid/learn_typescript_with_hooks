import React from "react";
import "../TodoListItem.css";

interface TodoListProps{
    todo:Todo;
    toggleTodo:toggleTodo;
}

const ToDoListIteam:React.FC<TodoListProps>=({todo,toggleTodo}) =>{
    return <li>
            <label
                className={todo.completed ? "completed": undefined }>
                <input type="checkbox" name="isChecked" id="isChecked" checked={todo.completed}
                    onChange={()=>toggleTodo(todo)}
                />
                {todo.text}
            </label>
    </li>
};

export default ToDoListIteam;