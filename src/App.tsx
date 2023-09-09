import './App.css'
import TopBar from "./components/TopBar/TopBar";
import TasksColumn from "./components/TasksColumn/TasksColumn";
import {FC, useEffect} from "react";
import {observer} from "mobx-react-lite";
import todos from "./store/todos";

const App : FC = observer (() => {

    useEffect(() => {
      todos.fetchTodos();
    }, [])

    return (
      <>
        <TopBar/>
        <TasksColumn/>
      </>
    )
  }
)

export default App
