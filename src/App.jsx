import React, { useState, useEffect } from "react";
import './App.css';

import Form from "./components/Form";
import Todo from "./components/Todo";
import ToDoList from "./components/ToDoList";

function App() {
  
  //state
  const [ inputText, setInputText ] = useState("");
  const [ toDos, setToDos ] = useState([]);
  const [ status, setStatus] = useState("all"); //default
  const [ filteredToDos, setFilteredToDos ] = useState([]);

  // Run once when the app start
  useEffect(() => {
    getLocalToDos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
  }, [toDos, status]);

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
  };
  //save to local storage
  const saveLocalToDos = () => {
    localStorage.setItem("toDos", JSON.stringify([toDos]));
  };
  const getLocalToDos = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }
  };


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
          filteredToDos={filteredToDos}
          setToDos={setToDos} 
          toDos={toDos} 
        />
    </div>
  );
}

export default App;
