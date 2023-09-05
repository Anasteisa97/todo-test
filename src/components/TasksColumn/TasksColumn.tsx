import "./TasksColumn.scss"
import Task from "../Task/Task";

const TasksColumn = ({todos}) => {
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