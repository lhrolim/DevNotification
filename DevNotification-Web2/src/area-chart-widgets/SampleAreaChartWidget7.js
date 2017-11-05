import React from 'react'
import AreaChartWidget7 from './AreaChartWidget7'
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

const SampleAreaChartWidget7 = () => (
  <AreaChartWidget7
    widgets={widgets}
    bg={'transparent'}
    color={'danger'}
    height={120}
  />
)

export default SampleAreaChartWidget7
