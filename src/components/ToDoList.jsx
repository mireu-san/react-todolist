import React from "react";
// Import components
import Todo from "./Todo";

const ToDoList = ({ toDos, setToDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {toDos.map((todo) => (
                    <Todo  // rendering Todo from Todo.jsx 
                        setToDos={setToDos} 
                        toDos={toDos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} 
                    /> 
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;