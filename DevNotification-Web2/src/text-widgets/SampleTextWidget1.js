import React from 'react'
import TextWidget1 from './TextWidget1'

let widgets = [
  {
    bg: 'warning',
    color: 'white',
    subtitle: 'Users',
    title: '4,412',
    percent: '+5%',
    percentColor: 'success',
    align: 'left'
  },
  {
    bg: 'danger',
    color: 'white',
    subtitle: 'Users',
    title: '4,412',
    percent: '+5%',
    percentColor: 'white',
    align: 'left'
  },
  {
    bg: 'transparent',
    color: 'default',
    subtitle: 'Users',
    title: '4,412',
    percent: '-5%',
    percentColor: 'danger',
    align: 'left'
  },
  {
    bg: 'primary',
    color: 'white',
    subtitle: 'Users',
    title: '4,412',
    percent: '+5%',
    percentColor: 'white',
    align: 'left'
  }
]

const SampleTextWidget1 = () => (
  <div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget1 {...widget} />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget1 {...widget} align="center" />
        </div>
      ))}
    </div>
    <div className="row">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget1 {...widget} align="right" />
        </div>
      ))}
    </div>
  </div>
)

export default SampleTextWidget1
