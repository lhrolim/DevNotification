import React from 'react'
import BarChartWidget6 from './BarChartWidget6'
import {random} from '../functions'

const widget6 = {
  bg: 'transparent',
  color: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}

const SampleBarChartWidget6 = () => (
  <BarChartWidget6 widget={widget6} color={'success'} height={120} />
)

export default SampleBarChartWidget6
