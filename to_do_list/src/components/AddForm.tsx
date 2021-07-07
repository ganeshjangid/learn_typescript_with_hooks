import React, { useState,ChangeEvent,FormEvent } from 'react';

interface addToDoProps{
    addToDo:addToDo;
}

const AddForm:React.FC<addToDoProps>=({addToDo})=>{
    const [newTodo,setNewTodo]=useState<string>("");

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value);
    }
    const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addToDo(newTodo);
        setNewTodo("");
    }

    return(
        <form>
            <input type="text" value={newTodo} onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit} >Add Item</button>
        </form>
    )
}

export default AddForm;