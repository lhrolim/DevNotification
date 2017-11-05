import React from 'react'
import IconWidget4 from './IconWidget4'
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
    bg: 'danger',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: random(10, 99)
  },
  {
    bg: 'warning',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: random(10, 99)
  },
  {
    bg: 'primary',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: random(10, 99)
  }
]

const SampleIconWidget4 = () => (
  <div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget4 {...widget} />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget4 {...widget} />
        </div>
      ))}
    </div>
    <div className="row">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget4 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

export default SampleIconWidget4
