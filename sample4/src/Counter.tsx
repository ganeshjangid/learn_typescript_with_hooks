import React, { useEffect, useState } from 'react';

interface CountProps{
    description:string;
    counter:number;
}

export interface ToDoList {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export const Counter:React.FC<CountProps>=({description,counter})=>{
    let [count,setCount]=useState(counter);
    const [todo,setToDo]=useState<ToDoList>();    

    // useEffect(()=>{
    //     const id=setTimeout(() => {
    //         console.log(description);    
    //     }, 3000);

    //     return ()=>{
    //         clearTimeout(id);
    //     }

    // },[description])

    useEffect(()=>{
        async function loadData(){
           const respon=await fetch('https://jsonplaceholder.typicode.com/todos/'+description);
            const json =await respon.json();
            setToDo(json);
        }
        loadData();
    },[description]);

    return(
        <div>
            <hr/>
            <h2>Desc: {description}</h2>
            <br/>
            <button onClick={()=> setCount(count - 1)}>-</button>
            &nbsp;{count}&nbsp;
            <button onClick={()=> {
                setCount(count+1    );
            }}>+</button>
            <hr/>
            {todo?.title}

        </div>
    )
}
