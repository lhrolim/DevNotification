import React from 'react'
import BarChartWidget1 from './BarChartWidget1'
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

const SampleBarChartWidget1 = () => (
  <BarChartWidget1 widgets={widgets} color={'danger'} height={120} />
)

export default SampleBarChartWidget1
