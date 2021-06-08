import React, { useState } from "react";
import './App.css';

import Form from "./components/Form";
import Todo from "./components/Todo";
import ToDoList from "./components/ToDoList";

function App() {
  //state
  const [ inputText, setInputText ] = useState("");
  const [ toDos, setToDos ] = useState([]);
  const [ status, setStatus] = useState("all"); //default
  const [ filterdToDos, setFilteredToDos ] = useState([]);
  // functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredToDos(toDos.filter(todo => todo.completed === true))
        break;
      case "incompleted":
        setFilteredToDos(toDos.filter(todo => todo.completed === false))
        break;
      default: //show all of them -> all
        setFilteredToDos(toDos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Today's Matter</h1>
      </header>
        <Form 
          inputText={inputText}
          toDos={toDos} 
          setToDos={setToDos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <ToDoList 
          setToDos={setToDos} 
          toDos={toDos} 
        />
    </div>
  );
}

export default App;
