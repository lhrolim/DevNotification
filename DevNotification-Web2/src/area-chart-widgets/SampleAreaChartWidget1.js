import React from 'react'
import AreaChartWidget1 from './AreaChartWidget1'
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

const SampleAreaChartWidget1 = () => (
  <AreaChartWidget1 widgets={widgets} color={'danger'} height={120} />
)

export default SampleAreaChartWidget1
