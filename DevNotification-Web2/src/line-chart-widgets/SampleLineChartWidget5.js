import React from 'react'
import LineChartWidget5 from './LineChartWidget5'
import {random} from '../functions'

let widget = {
  bg: 'transparent',
  color: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}

const SampleLineChartWidget5 = () => (
  <LineChartWidget5 widget={widget} color={'primary'} height={120} />
)

export default SampleLineChartWidget5
