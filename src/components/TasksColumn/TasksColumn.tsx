import "./TasksColumn.scss"
import Task from "../Task/Task";
import {FC} from "react";
import {observer} from "mobx-react-lite";
import todos from "../../store/todos";

const TasksColumn: FC = observer(() => {
    return (
      <div className='tasks-col'>
        {todos.todos.map(todo => <Task
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={todo.id}
        />)}
      </div>
    )
  }
)

export default TasksColumn