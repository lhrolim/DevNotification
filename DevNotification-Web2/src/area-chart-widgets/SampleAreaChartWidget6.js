import React from 'react'
import AreaChartWidget6 from './AreaChartWidget6'
import {random} from '../functions'

let widget = {
  bg: 'transparent',
  color: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}

const SampleAreaChartWidget6 = () => (
  <AreaChartWidget6 widget={widget} color={'success'} height={120} />
)

export default SampleAreaChartWidget6
