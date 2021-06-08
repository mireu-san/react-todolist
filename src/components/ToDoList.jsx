import React from "react";
// Import components
import Todo from "./Todo";

const ToDoList = ({ toDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {toDos.map(todo => (
                    <Todo />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;