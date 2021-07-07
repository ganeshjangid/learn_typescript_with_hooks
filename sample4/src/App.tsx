import React, { useState } from 'react';
import './App.css';
import {Counter} from './Counter';

function App() {
  const [desc,setDesc]=useState("");
// Math.floor(Math.random()*100)
  
  return (
    <div className="App">
        <h1>Learn UseState using typescript</h1>
        <input type="text"  value={desc} onChange={(evt)=> setDesc(evt.target.value)}/>
        <br /><br />
        <Counter description={desc} counter={0} />
  
    </div>
  );
}

export default App;
