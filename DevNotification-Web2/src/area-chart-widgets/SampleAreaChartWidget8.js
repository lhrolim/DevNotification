import React from 'react'
import AreaChartWidget8 from './AreaChartWidget8'
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

const SampleAreaChartWidget8 = () => (
  <AreaChartWidget8
    widgets={widgets}
    bg={'transparent'}
    color={'success'}
    height={120}
  />
)

export default SampleAreaChartWidget8
