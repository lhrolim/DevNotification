import React from 'react'
import IconWidget3 from './IconWidget3'
import {random} from '../functions'

let widgets = [
  {
    bg: 'transparent',
    color: 'default',
    icon: 'grade',
    iconColor: 'default',
    text: random(10, 99)
  },
  {
    bg: 'primary',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: random(10, 99)
  },
  {
    bg: 'info',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: random(10, 99)
  },
  {
    bg: 'success',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: random(10, 99)
  }
]

const SampleIconWidget3 = () => (
  <div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget3 {...widget} />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget3 {...widget} />
        </div>
      ))}
    </div>
    <div className="row">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget3 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

export default SampleIconWidget3
