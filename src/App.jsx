import { React, useState } from "react";
import './App.css';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [ inputText, setInputText ] = useState("");
  const [ toDos, setToDos ] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Today's Matter {inputText}</h1>
      </header>
        <Form todos={todos} setTodos={setTodos} setInputText={setInputText}/>
        <ToDoList />
    </div>
  );
}

export default App;
