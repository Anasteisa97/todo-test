import React from "react";
import "./TopBar.scss"
import addSvg from "../../assets/add.svg"

const TopBar = ({todosCount}) => {
  return (
    <div className="top">
      <span className="date">Today</span>
      <div className="top-right">
        <button className="top-add">
          <img src={addSvg} alt='' />
        </button>
        <span className="top-count fsz-12">{todosCount}</span>
      </div>
    </div>
  )
}

export default TopBar