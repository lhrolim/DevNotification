import React from 'react'
import LineChartWidget7 from './LineChartWidget7'
import {random} from '../functions'

let widgets = [
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
  },
  {
    bg: 'transparent',
    color: 'default',
    iconColor: 'default',
    icon: 'favorite',
    text: random(100, 999)
  }
]

const SampleLineChartWidget7 = () => (
  <LineChartWidget7
    widgets={widgets}
    bg={'transparent'}
    color={'danger'}
    height={120}
  />
)

export default SampleLineChartWidget7
