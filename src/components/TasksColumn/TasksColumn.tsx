import "./TasksColumn.scss"
import Task from "../Task/Task";
import {FC} from "react";
import {observer} from "mobx-react-lite";
import todos from "../../store/todos";
import {TodoType} from "../../types.ts";

const TasksColumn: FC = observer(() => {
    return (
      <div className='tasks-col'>
        {todos.todos.map((todo: TodoType, _, array: TodoType[]) => <Task
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={todo.id}
          isLast={todo.id === array.length}
        />)}
      </div>
    )
  }
)

export default TasksColumn