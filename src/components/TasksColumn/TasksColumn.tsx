import "./TasksColumn.scss"
import Task from "../Task/Task";
import {FC} from "react";
import {TodoType} from "../../types";

type TasksColumnProps = {
  todos: TodoType[]
}

const TasksColumn: FC<TasksColumnProps> = ({todos}) => {
  return (
    <div className='tasks-col'>
      {todos.map(todo => <Task
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        key={todo.id}
      />)}
    </div>
  )
}

export default TasksColumn