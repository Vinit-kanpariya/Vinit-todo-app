import React, { useEffect, useState } from "react";  

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    useEffect(() => {
        if (!isEditing) {
            setNewText(todo.text);
        }
    }, [todo.text, isEditing]);

    const handleFocus = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        if (newText.trim() && newText !== todo.text) {
            editTodo(todo.id, newText);
        }
        setIsEditing(false);
    };

    return (
        <div className="flex items-center justify-between p-2 border-b border-grey-200 last:border-none">
            <input
                type="checkbox"
                checked={todo.completed}
                name="checkbox"
                onChange={() => toggleComplete(todo.id)} />
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    name="input"
                    onChange={(e) => setNewText(e.target.value)}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <span onClick={handleFocus}>
                    {todo.text}
                </span>
            )}
            <button onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-100 hover:text-red-600 p-1 border hover:border-red-600">
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
