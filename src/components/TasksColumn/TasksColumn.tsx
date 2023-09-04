import "./TasksColumn.scss"
import Task from "../Task/Task";

const TasksColumn = () => {
  return (
    <div className='tasks-col'>
      <Task />
      <Task />
    </div>
  )
}

export default TasksColumn