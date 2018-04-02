import React from 'react'
import BarChartWidget4 from './BarChartWidget4'
import {random} from '../functions'

const widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Visits',
  subtitle: random(100, 999),
  align: 'right'
}

const SampleBarChartWidget4 = () => (
  <BarChartWidget4
    widget={widget}
    bg={'transparent'}
    color={'warning'}
    height={120}
  />
)

export default SampleBarChartWidget4
