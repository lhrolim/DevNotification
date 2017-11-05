import React from 'react'
import TextWidget9 from './TextWidget9'

let widgets = [
  {
    bg: 'transparent',
    color: 'default',
    subtitle: 'Users',
    title: '4,412',
    align: 'left'
  },
  {
    bg: 'primary',
    color: 'white',
    subtitle: 'Profit',
    title: '$9,876',
    align: 'left'
  },
  {
    bg: 'info',
    color: 'white',
    subtitle: 'Orders',
    title: '578',
    align: 'left'
  },
  {
    bg: 'success',
    color: 'white',
    subtitle: 'Sales',
    title: '154',
    align: 'left'
  }
]

const SampleTextWidget9 = () => (
  <div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget9 {...widget} />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget9 {...widget} align="center" />
        </div>
      ))}
    </div>
    <div className="row m-b-10">
      {widgets.map((widget, i) => (
        <div className="col-12 col-sm-4 col-lg-2" key={i}>
          <TextWidget9 {...widget} align="right" />
        </div>
      ))}
    </div>
  </div>
)

export default SampleTextWidget9
