import React,{ChangeEvent, useState,FormEvent} from 'react';

interface AddToForm{
    addForm:AddTodo;
}

const AddForm:React.FC<AddToForm>=({addForm})=>{
    const [text,setText]=useState("");

    const handleText=(e:ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value);
    };

    const handleSave=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addForm(text);
        setText("");
    }

    return(
        <form>
            <input type="text" value={text} onChange={handleText}></input>
            <button onClick={handleSave}>Submit</button>
        </form>
    )
};

export default AddForm;