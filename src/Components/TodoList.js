import React from "react";
import TodoItem from "./TodoItem"; 

function TodoList({todos, toggleComplete, deleteTodo}){
    return(
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}/>
        ))}
        </div>
    );
}

export default TodoList;