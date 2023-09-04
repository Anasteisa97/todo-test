import Avatar from "../../assets/avatar.jpg"
import "./Task.scss"

const Task = () => {
  return (
    <article className="task">
      <div className="task-inner">
        <div className="task-title">
          <input type="checkbox" id="task1"/>
          <label htmlFor="task1" className="fw-bold">For the sacke of example we are a building company and we have just closed</label>
        </div>
        <div>
          <div className="task-dates">
            <span className="date fsz-13">Oct 12, 01:00 PM</span>
            <span className="date fsz-13">Oct 01, 02:00 PM</span>
          </div>
          <p className="task-descr fsz-13">Task description with long long long te</p>
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
    </article>
  )
}

export default Task