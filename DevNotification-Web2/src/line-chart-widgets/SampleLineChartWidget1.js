import React from 'react'
import LineChartWidget1 from './LineChartWidget1'
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

const SampleLineChartWidget1 = () => (
  <LineChartWidget1 widgets={widgets} color={'danger'} height={120} />
)

export default SampleLineChartWidget1
