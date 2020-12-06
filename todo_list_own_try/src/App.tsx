import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from "./components/AddForm";
import {ItemList} from './components/ItemList';

const initListItem=[{text:"test1",isCompleted:false}];


function App() {
  const [itemList,setItemList]=useState(initListItem);

  const addToDo:AddTodo=(newToDo)=>{

    newToDo.trim() !== "" &&
    setItemList([...itemList,{text:newToDo,isCompleted:false}]);
  }

  const toggleItem:toggleTodo=(selectItem:number)=>{
    //console.log(selectItem);
    const newTodos=itemList.map((item,idx)=>{
      //console.log(idx);
       if(idx === selectItem){
          return {
            ...item,
            isCompleted:!item.isCompleted
          }
       }
       return  item;
    });
    setItemList(newTodos);
    //console.log(newTodos);
  };


  return (
    <div className="App">
      <h1>Try Own Create To Do List using React Hooks And typescript</h1>
      <div className="row container">
        <div className="col-3"></div>
        <div  className="col-8">
          {
            ItemList && <ItemList dataItem={itemList}  toggleItem={toggleItem}/>
          }
          
          <AddForm addForm={addToDo} />
        </div>
       
      </div>
      
    </div>
  );
}

export default App;
