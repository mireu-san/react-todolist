import React from 'react'
// Import components
const Todo = ({ text, todo, toDos, setToDos }) => {
    // Events
    const deleteHandler = () => {
       setToDos(toDos.filter(el => el.id !== todo.id)); // el = element
    };
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
