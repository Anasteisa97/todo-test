import Avatar from "../../assets/avatar.jpg"
import "./Task.scss"
import {FC, MutableRefObject, useRef} from "react";
import {faker} from "@faker-js/faker";
import {getDateTemplate, getRandomStringEnum} from "../../utils";
import {Development, TodoType} from "../../types";
import {useIntersectionObserver} from "usehooks-ts";
import {observer} from "mobx-react-lite";
import todos from "../../store/todos";

type TaskProps = TodoType & {
  isLast: boolean
}

const Task: FC<TaskProps> = observer(({id, title, completed, isLast}) => {

  const description: string = faker.lorem.paragraph(),
    tag: string = faker.word.words({ count: { min: 1, max: 2 } }),
    startDate: Date = faker.date.recent({ days: 10 }),
    endDate: Date = faker.date.soon({ days: 10 })

  const ref: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null)
  const entry: IntersectionObserverEntry | undefined = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  })
  const isVisible: boolean = !!entry?.isIntersecting

  if (isLast && isVisible) {
    todos.fetchTodos();
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