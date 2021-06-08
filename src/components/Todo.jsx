import React from 'react'
// Import components
const Todo = ({ text, toDos, setToDos }) => {
    // Events
    const deleteHandler = () => {};
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
