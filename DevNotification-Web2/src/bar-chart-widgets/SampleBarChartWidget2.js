import React from 'react'
import BarChartWidget2 from './BarChartWidget2'
import {random} from '../functions'

const widgets = [
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'default',
    title: 'Sales',
    subtitle: '$5.466',
    align: 'center'
  },
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'default',
    title: 'Visits',
    subtitle: random(100, 999),
    align: 'center'
  }
]

const SampleBarChartWidget2 = () => (
  <BarChartWidget2 widgets={widgets} color={'success'} height={120} />
)

export default SampleBarChartWidget2
