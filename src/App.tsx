import './App.css'
import TopBar from "./components/TopBar/TopBar";
import TasksColumn from "./components/TasksColumn/TasksColumn";
import {useEffect, useState} from "react";
import {fetchTodos} from "./api/fetchTodos";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, [])

  return (
    <>
      <TopBar/>
      <TasksColumn todos={todos}/>
    </>
  )
}

export default App
