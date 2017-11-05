import React from 'react'
import LineChartWidget4 from './LineChartWidget4'
import {random} from '../functions'

let widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Visits',
  subtitle: random(100, 999),
  align: 'right'
}

const SampleLineChartWidget4 = () => (
  <LineChartWidget4
    widget={widget}
    bg={'transparent'}
    color={'warning'}
    height={120}
  />
)

export default SampleLineChartWidget4
