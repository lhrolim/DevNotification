import React from 'react'
import IconWidget6 from '../../icon-widgets/IconWidget6'
import {random} from '../../functions'

const widgets = [
  {
    bg: 'info',
    color: 'white',
    icon: 'done',
    text: 'Pending orders',
    number: random(10, 99)
  },
  {
    bg: 'success',
    color: 'white',
    icon: 'add_shopping_cart',
    text: 'Orders today',
    number: random(50, 99)
  },
  {
    bg: 'warning',
    color: 'white',
    icon: 'attach_money',
    text: 'Sales today',
    number: random(50, 99)
  },
  {
    bg: 'danger',
    color: 'white',
    icon: 'cached',
    text: 'Revenue today',
    number: '$3,888'
  }
]

const Section1 = () => (
  <div className="row m-b-20">
    {widgets.map((widget, i) => (
      <div className="col-12 col-md-12 col-lg-3" key={i}>
        <div className="row" key={i}>
          <div className="col-12 m-b-10">
            <IconWidget6 {...widget} />
          </div>
        </div>
      </div>
    ))}
  </div>
)
export default Section1
