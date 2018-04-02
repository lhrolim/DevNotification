import React from 'react'
import Task from './Task'
import {random} from '../../functions'
import '../../css/elements/dropdown-tasks.css'

const DropdownTasks = ({tasksForToday, tasksForTomorrow}) => (
  <div className="navbar-dropdown dropdown-tasks">
    <div className="dropdown-inner">
      <div className="dropdown-title">7 pending tasks</div>
      <h6 className="dropdown-header">Today</h6>
      {tasksForToday.map((task, i) => <Task key={i} {...task} />)}
      <h6 className="dropdown-header">Tomorrow</h6>
      {tasksForTomorrow.map((task, i) => <Task key={i} {...task} />)}
    </div>
  </div>
)

let tasksForToday = [
  {
    title: 'Mobile app development',
    color: 'secondary',
    value: random(50, 90)
  },
  {
    title: 'Deploy github project',
    color: 'info',
    value: random(50, 90)
  }
]

let tasksForTomorrow = [
  {
    title: 'Customer development',
    color: 'success',
    value: random(50, 90)
  },
  {
    title: 'Database backup',
    color: 'warning',
    value: random(50, 90)
  },
  {
    title: 'Release beta version',
    color: 'danger',
    value: random(50, 90)
  }
]

const SampleDropdownTasks = () => (
  <DropdownTasks
    tasksForToday={tasksForToday}
    tasksForTomorrow={tasksForTomorrow}
  />
)

export default SampleDropdownTasks
