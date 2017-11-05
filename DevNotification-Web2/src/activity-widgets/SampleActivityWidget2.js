import React from 'react'
import ActivityWidget2 from './ActivityWidget2'

let widget1 = {
  bg: 'transparent',
  color: 'default',
  title: 'Income',
  subtitle: 'Last year',
  number: '$22,656',
  percent: '+8.8%',
  percentColor: 'success',
  barValue: 71,
  barColor: 'success'
}

let widget2 = {
  bg: 'transparent',
  color: 'default',
  title: 'Ad spending',
  subtitle: 'This week',
  number: '$10,235',
  percent: '-7.1%',
  percentColor: 'danger',
  barValue: 58,
  barColor: 'danger'
}

let widget3 = {
  bg: 'transparent',
  color: 'default',
  title: 'YTD sales',
  subtitle: 'Total sales',
  number: '$145,987',
  percent: '+12.22%',
  percentColor: 'success',
  barValue: 72,
  barColor: 'warning'
}

let widget4 = {
  bg: 'transparent',
  color: 'default',
  title: 'Profit',
  subtitle: 'Total profit',
  number: '$65,888',
  percent: '+2.8%',
  percentColor: 'success',
  barValue: 44,
  barColor: 'info'
}

const SampleActivityWidget2 = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <ActivityWidget2 {...widget1} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ActivityWidget2 {...widget2} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ActivityWidget2 {...widget3} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ActivityWidget2 {...widget4} />
      </div>
    </div>
  </div>
)

export default SampleActivityWidget2
