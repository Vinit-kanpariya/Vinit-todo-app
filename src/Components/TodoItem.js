import React,{useEffect, useState} from "react";  

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo}){
    const[isEditing, setIsEditing] = useState(false);
    const[newText, setNewText] = useState(todo.text);

    useEffect(() => {
        if(!isEditing){
            setNewText(todo.text);
        }
    }, [todo.text, isEditing]);

    const handleEdit = () => {
        if(isEditing){
            if(newText.trim()){
                editTodo(todo.id, newText);
                setNewText(newText);
            }else{
                alert("Task name can not be Empty!");
            }
        }
        setIsEditing(!isEditing);
    };

    useEffect(() => {
        setNewText(todo.text);
    }, [todo.text]);
    
    return(
        <div className="flex items-center justify-between p-2 border- b  border-grey-200 last:border-none">
            <input
            type="checkbox"
            checked = {todo.completed}
            name="checkbox"
            onChange={() => toggleComplete(todo.id)}/>
            {isEditing? (
                <input 
                type="text"
                value={newText}
                name="input"
                onChange={(e) => setNewText(e.target.value)}
                />
            ):(
            <span>
                {todo.text}
            </span>)}
            <button onClick={handleEdit} 
                className={`${isEditing ? "bg-green-500 hover:bg-green-200 hover:text-green-600 p-1 border hover:border-green-600" : " justify-self-end bg-yellow-500 hover:bg-yellow-200 hover:text-yellow-600 p-1 border hover:border-yellow-600"} text-white px-4 py-2 rounded-md`}>
                    {isEditing? "Save" : "Edit"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-100 hover:text-red-600 p-1 border hover:border-red-600"
                >Delete</button>
        </div>
    )
}

export default TodoItem;
