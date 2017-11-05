import React from 'react'
import DonutChartWidget7 from './DonutChartWidget7'
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
const SampleDonutChartWidget7 = () => (
  <DonutChartWidget7
    widgets={widgets}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    bg={'transparent'}
    height={150}
  />
)

export default SampleDonutChartWidget7
