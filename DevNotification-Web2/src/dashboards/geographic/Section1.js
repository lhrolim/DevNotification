import React from 'react'
import {random} from '../../functions'
import IconWidget6 from '../../icon-widgets/IconWidget6'

const widgets = [
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'warning',
    icon: 'attach_money',
    text: 'Sales',
    number: random(100, 999),
    padding: 0
  },
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'twitter',
    icon: 'shopping_cart',
    text: 'Orders',
    progressBar: {width: random(30, 90) + '%'},
    number: random(100, 999),
    padding: 0
  },
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'success',
    icon: 'star_border',
    text: 'Sales',
    progressBar: {width: random(30, 90) + '%'},
    number: random(100, 999),
    padding: 0
  },
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'danger',
    icon: 'cloud_upload',
    text: 'Uploads',
    progressBar: {width: random(30, 90) + '%'},
    number: random(100, 999),
    padding: 0
  }
]

const Section1 = () => (
  <div className="row m-b-20">
    {widgets.map((widget, i) => {
      let value = random(40, 80)
      let style = {width: value + '%'}
      return (
        <div className="col-12 col-md-12 col-lg-3" key={i}>
          <div className="row" key={i}>
            <div className="col-12">
              <div className="p-20">
                <IconWidget6 {...widget} />
                <div className="m-t-10 progress progress-sm">
                  <div
                    className={`progress-bar bg-${widget.iconColor}`}
                    value={`${value}`}
                    style={style}
                    role="progressbar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

export default Section1
