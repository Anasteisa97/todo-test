import Avatar from "../../assets/avatar.jpg"
import "./Task.scss"
import {useState} from "react";

const Task = ({id, title, completed}) => {

  const [checked, setChecked] = useState(completed);

  return (
    <article className="task">
      <label htmlFor={`task${id}`}>
        <div className="task-inner">
          <div className="task-top">
            <input className="task__checkbox" type="checkbox" id={`task${id}`} checked={checked} onChange={() => setChecked(!checked)}/>
            <span className="task__title fw-bold">{title}</span>
          </div>
          <div>
            <div className="task-dates">
              <span className="date fsz-13">Oct 12, 01:00 PM</span>
              <span className="date fsz-13">Oct 01, 02:00 PM</span>
            </div>
            <p className="task__descr fsz-13">Task description with long longlong long long te</p>
          </div>
          <footer className="task-bot">
            <div className="task-tags">
              <span className="task-tags__item task-tags__item_violet">Entity title</span>
              <span className="task-tags__item task-tags__item_gray">Front-end</span>
            </div>
            <div className="task-avatar">
              <img src={Avatar} alt="avatar"/>
            </div>
          </footer>
        </div>
      </label>

    </article>
  )
}

export default Task