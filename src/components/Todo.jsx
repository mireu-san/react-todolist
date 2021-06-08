import React from 'react'
// Import components
const Todo = ({ text, todo, toDos, setToDos }) => {
    // Events
    const deleteHandler = () => {
       setToDos(toDos.filter(el => el.id !== todo.id)); // el = element / by matching the ID that's been created previsouly (existing one), it can exactly delete the one it desire.
    };
    const completeHandler = () => {
        setToDos(toDos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed //pass
                }
            }
            return item;
        })
        );
    };
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
