import React, { useState } from "react";
import TodoForm from "./Components/TodoForm"; 
import TodoList from "./Components/TodoList";
import { useEffect } from "react";
import './main.css';

function App(){

  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos ? storedTodos : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

   
  const addTodo = (text) => {

    const isDuplicate = todos.some((todo) => todo.text.toLowerCase() === text.toLowerCase());
      if(isDuplicate){
        alert((text) +" is already added!");
        return;
      }

    const newTodo = {id: Date.now(), text, completed:false};
    setTodos([...todos,newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? 
        {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return(
    <div className="bg-grey-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="font-mono text-3xl font-bold text-blue-600 mb-5">To-DO App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App;
