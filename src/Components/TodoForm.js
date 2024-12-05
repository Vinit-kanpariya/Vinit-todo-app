import React, { useState } from "react";  

function TodoForm ({addTodo}){
    const[input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()){
            addTodo(input);
            setInput("");
        }
    };

    return(
        <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 border border-grey-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter Task"/>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-300 hover:text-green-600 p-1 border hover:border-green-600">Add</button>
        </form>
    )
}

export default TodoForm;
