import React from 'react'
import BarChartWidget5 from './BarChartWidget5'
import {random} from '../functions'

let widget = {
  bg: 'transparent',
  color: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}

const SampleBarChartWidget5 = () => (
  <BarChartWidget5 widget={widget} color={'primary'} height={120} />
)

export default SampleBarChartWidget5
