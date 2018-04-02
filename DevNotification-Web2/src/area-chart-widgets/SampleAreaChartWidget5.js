import React from 'react'
import AreaChartWidget5 from './AreaChartWidget5'
import {random} from '../functions'

let widget = {
  bg: 'transparent',
  color: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}

const SampleAreaChartWidget5 = () => (
  <AreaChartWidget5 widget={widget} color={'primary'} height={120} />
)

export default SampleAreaChartWidget5
