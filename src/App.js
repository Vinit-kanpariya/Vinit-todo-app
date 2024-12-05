import React, { useState } from "react";
import TodoForm from "./Components/TodoForm"; 
import TodoList from "./Components/TodoList";
import './main.css';


function App(){
  const [todos, setodos] = useState([]);
  const addTodo = (text) => {

    const isDuplicate = todos.some((todo) => todo.text.toLowerCase() === text.toLowerCase());
      if(isDuplicate){
        alert("This task is already added!");
        return;
      }

    const newtodo = {id: Date.now(), text, completed:false};
    setodos([...todos,newtodo]);
  };

  const toggleComplete = (id) => {
    setodos(
      todos.map((todo) => 
        todo.id === id ? 
        {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (id) =>{
    setodos(todos.filter((todo) => todo.id !== id));
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