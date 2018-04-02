import React from 'react'
import LineChartWidget8 from './LineChartWidget8'
import {random} from '../functions'

let widgets = [
  {
    bg: 'transparent',
    color: 'default',
    title: 'Sales',
    subtitle: '$5.466',
    align: 'center'
  },
  {
    bg: 'transparent',
    color: 'default',
    title: 'Visits',
    subtitle: random(100, 999),
    align: 'center'
  }
]

const SampleLineChartWidget8 = () => (
  <LineChartWidget8
    widgets={widgets}
    bg={'transparent'}
    color={'success'}
    height={120}
  />
)

export default SampleLineChartWidget8
