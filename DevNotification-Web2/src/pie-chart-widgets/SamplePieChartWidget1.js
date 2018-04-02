import React from 'react'
import PieChartWidget1 from './PieChartWidget1'
import {random} from '../functions'

const widgets = [
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'default',
    icon: 'timeline',
    text: random(100, 999)
  },
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'default',
    icon: 'grade',
    text: random(100, 999)
  }
]
const SamplePieChartWidget1 = () => (
  <PieChartWidget1
    widgets={widgets}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    height={200}
  />
)

export default SamplePieChartWidget1
