import React from 'react'

const Task = ({title, value, color}) => {
  let style = {width: value + '%'}
  return (
    <div className="dropdown-item">
      <p>
        <span className="title">{title}</span>
        <span className="value">
          {value}
          {'%'}
        </span>
      </p>
      <div className="progress progress-sm">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={style}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  )
}

export default Task
