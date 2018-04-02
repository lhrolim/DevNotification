import React from 'react'
import LineChartWidget2 from './LineChartWidget2'
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

const SampleLineChartWidget2 = () => (
  <LineChartWidget2 widgets={widgets} color={'success'} height={120} />
)

export default SampleLineChartWidget2
