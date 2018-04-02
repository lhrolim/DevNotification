import React from 'react'
import DonutChartWidget1 from './DonutChartWidget1'
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
const SampleDonutChartWidget1 = () => (
  <DonutChartWidget1
    widgets={widgets}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    height={150}
  />
)

export default SampleDonutChartWidget1
