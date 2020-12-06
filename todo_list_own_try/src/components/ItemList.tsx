import React,{Fragment, useState} from 'react';

interface ToDolistProps{
    dataItem:Array<Todo>;
    toggleItem:toggleTodo;
}

const compledtedClass={
    textDecoration: "line-through"
}



export const ItemList:React.FC<ToDolistProps>=({dataItem,toggleItem})=>{
    //console.log(dataItem);
    const handleToggle=(idx:number)=>{
        //console.log(idx);
        toggleItem(idx);
    };
    return(
        <Fragment>
        <h4>List Of Item</h4>
        <ul>
            {
            dataItem.map((item,idx)=>{
                //console.log(item.isCompleted);
                return (
                  <li 
                    key={idx}
                    style={item.isCompleted ? compledtedClass : {}}
                    >
                    <span>
                      <input type="checkbox" checked={item.isCompleted} onClick={()=>handleToggle(idx)}></input>
                    </span>
                    &nbsp;<span>{item.text}</span>
                  </li>
                );
            })
            }   
        </ul>
        </Fragment>
        
    )
}