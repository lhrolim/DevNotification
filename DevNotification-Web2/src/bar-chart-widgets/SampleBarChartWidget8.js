import React from 'react'
import BarChartWidget8 from './BarChartWidget8'
import {random} from '../functions'

const widgets = [
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

const SampleBarChartWidget8 = () => (
  <BarChartWidget8
    widgets={widgets}
    bg={'transparent'}
    color={'success'}
    height={120}
  />
)

export default SampleBarChartWidget8
