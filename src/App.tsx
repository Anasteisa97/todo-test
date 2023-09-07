import './App.css'
import TopBar from "./components/TopBar/TopBar";
import TasksColumn from "./components/TasksColumn/TasksColumn";
import {FC, useEffect, useState} from "react";
import {fetchTodos} from "./api/fetchTodos";

function App() : FC {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, [])

  return (
    <>
      <TopBar todosCount={todos.length}/>
      <TasksColumn todos={todos}/>
    </>
  )
}

export default App
