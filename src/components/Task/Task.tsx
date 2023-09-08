import Avatar from "../../assets/avatar.jpg"
import "./Task.scss"
import {FC, useRef} from "react";
import {faker} from "@faker-js/faker";
import {getDateTemplate, getRandomStringEnum} from "../../utils";
import {Development, TodoType} from "../../types";
import {useIntersectionObserver} from "usehooks-ts";
import {observer} from "mobx-react-lite";
import todos from "../../store/todos";

const Task: FC<TodoType> = observer(({id, title, completed}) => {

  const description = faker.lorem.paragraph(),
    tag = faker.word.words({ count: { min: 1, max: 2 } }),
    startDate = faker.date.recent({ days: 10 }),
    endDate = faker.date.soon({ days: 10 })

  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  })
  const isVisible = !!entry?.isIntersecting

  //console.log(`Render Section ${title}`, { isVisible })
  if ((id === 10) && isVisible) {
    todos.fetchTodos(2)
  }

  return (
    <article className="task" ref={ref}>
      <label htmlFor={`task${id}`}>
        <div className="task-inner">
          <div className="task-top">
            <input
              className="task__checkbox"
              type="checkbox"
              id={`task${id}`}
              defaultChecked={completed}
            />
            <span className="task__title fw-bold">{title}</span>
          </div>
          <div>
            <div className="task-dates">
              <span className="date fsz-13">{getDateTemplate(startDate)}</span>
              <span className="date fsz-13">{getDateTemplate(endDate)}</span>
            </div>
            <p className="task__descr fsz-13">{description}</p>
          </div>
          <footer className="task-bot">
            <div className="task-tags">
              <span className="task-tags__item task-tags__item_title">
                {tag}
              </span>
              <span className="task-tags__item task-tags__item_dev">
                {getRandomStringEnum(Development)}
              </span>
            </div>
            <div className="task-avatar">
              <img src={Avatar} alt="avatar"/>
            </div>
          </footer>
        </div>
      </label>
    </article>
  )
})

export default Task