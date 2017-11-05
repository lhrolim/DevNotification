import React from 'react'
import TextWidget11 from './TextWidget11'

let widgets = [
  {
    bg: 'transparent',
    color: 'default',
    subtitle: 'Users',
    title: '4,412',
    percent: '+5%',
    percentColor: 'success',
    align: 'left'
  },
  {
    bg: 'transparent',
    color: 'default',
    subtitle: 'Profit',
    title: '$9,876',
    percent: '-2.5%',
    percentColor: 'danger',
    align: 'left'
  },
  {
    bg: 'transparent',
    color: 'default',
    subtitle: 'Orders',
    title: '578',
    percent: '+15.2%',
    percentColor: 'success',
    align: 'left'
  },
  {
    bg: 'transparent',
    color: 'default',
    subtitle: 'Sales',
    title: '154',
    percent: '-4%',
    percentColor: 'danger',
    align: 'left'
  }
]

const SampleTextWidget11 = () => (
  <div>
    {['left', 'center', 'right'].map((alignment, i) => (
      <div className="row" key={i}>
        <div className="col">
          {widgets.map((widget, j) => (
            <div className="row" key={j}>
              <div className="col-12 col-md-6 col-lg-3 m-b-10">
                <TextWidget11 {...widget} align={alignment} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export default SampleTextWidget11
