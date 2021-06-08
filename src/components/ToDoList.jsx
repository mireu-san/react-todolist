import React from "react";
// Import components
import Todo from "./Todo";

const ToDoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
            </ul>
        </div>
    );
};

export default ToDoList;