import React from "react";  

function TodoItem({ todo, toggleComplete, deleteTodo}){
    return(
        <div className="flex items-center justify-between p-2 border- b  border-grey-200 last:border-none">
            <input
            type="checkbox"
            name="checkbox"
            checked = {todo.completed}
            onChange={() => toggleComplete(todo.id)}/>
            <span>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-100 hover:text-red-600 p-1 border hover:border-red-600"
                >Delete</button>
        </div>
    )
}

export default TodoItem;
