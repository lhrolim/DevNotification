import React from 'react'
import IconWidget6 from './IconWidget6'

let widgets = [
  {
    bg: 'transparent',
    color: 'default',
    icon: 'grade',
    iconColor: 'default',
    text: 'Online revenue',
    number: '$12.541'
  },
  {
    bg: 'danger',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: 'Online revenue',
    number: '$12.541'
  },
  {
    bg: 'warning',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: 'Online revenue',
    number: '$12.541'
  },
  {
    bg: 'primary',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: 'Online revenue',
    number: '$12.541'
  }
]

const SampleIconWidget6 = () => (
  <div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget6 {...widget} />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget6 {...widget} />
        </div>
      ))}
    </div>
    <div className="row">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget6 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

export default SampleIconWidget6
