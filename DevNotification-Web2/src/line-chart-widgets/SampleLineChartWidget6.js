import React from 'react'
import LineChartWidget6 from './LineChartWidget6'
import {random} from '../functions'

let widget = {
  bg: 'transparent',
  color: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}

const SampleLineChartWidget6 = () => (
  <LineChartWidget6 widget={widget} color={'success'} height={120} />
)

export default SampleLineChartWidget6
