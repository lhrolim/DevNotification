import React from 'react'
import BarChartWidget7 from './BarChartWidget7'
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

const SampleBarChartWidget7 = () => (
  <BarChartWidget7
    widgets={widgets}
    bg={'transparent'}
    color={'danger'}
    height={120}
  />
)

export default SampleBarChartWidget7
