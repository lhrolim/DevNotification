import React from 'react'
import TextWidget10 from './TextWidget10'

let widgets = [
  {
    bg: 'info',
    color: 'white',
    title: 'Users',
    subtitle: '4,412',
    align: 'left'
  },
  {
    bg: 'success',
    color: 'white',
    title: 'Profit',
    subtitle: '$9,876',
    align: 'left'
  },
  {
    bg: 'warning',
    color: 'white',
    title: 'Orders',
    subtitle: '578',
    align: 'left'
  },
  {
    bg: 'danger',
    color: 'white',
    title: 'Sales',
    subtitle: '154',
    align: 'left'
  }
]

const SampleTextWidget10 = () => (
  <div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget10 {...widget} />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget10 {...widget} align="center" />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget10 {...widget} align="right" />
        </div>
      ))}
    </div>
  </div>
)

export default SampleTextWidget10
