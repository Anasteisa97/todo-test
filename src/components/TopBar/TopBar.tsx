import React, {FC} from "react";
import "./TopBar.scss"
import addSvg from "../../assets/add.svg"
import todos from "../../store/todos";
import {observer} from "mobx-react-lite";

const TopBar: FC = observer(() => {
  return (
    <div className="top">
      <span className="date">Today</span>
      <div className="top-right">
        <button className="top-add">
          <img src={addSvg} alt='' />
        </button>
        <span className="top-count fsz-12">{todos.todos.length}</span>
      </div>
    </div>
  )
})

export default TopBar