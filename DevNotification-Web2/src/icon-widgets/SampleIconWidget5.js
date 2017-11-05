import React from 'react'
import IconWidget5 from './IconWidget5'

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
    bg: 'primary',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: 'Online revenue',
    number: '$12.541'
  },
  {
    bg: 'info',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: 'Online revenue',
    number: '$12.541'
  },
  {
    bg: 'success',
    color: 'white',
    icon: 'grade',
    iconColor: 'white',
    text: 'Online revenue',
    number: '$12.541'
  }
]

const SampleIconWidget5 = () => (
  <div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget5 {...widget} />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget5 {...widget} />
        </div>
      ))}
    </div>
    <div className="row">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <IconWidget5 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

export default SampleIconWidget5
