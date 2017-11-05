import React from 'react'
import DonutChartWidget8 from './DonutChartWidget8'
import {random} from '../functions'

const widgets = [
  {
    bg: 'transparent',
    color: 'default',
    align: 'center',
    title: 'Sales',
    subtitle: '$5.466'
  },
  {
    bg: 'transparent',
    color: 'default',
    align: 'center',
    title: 'Visits',
    subtitle: String(random(100, 999))
  }
]

const SampleDonutChartWidget8 = () => (
  <DonutChartWidget8
    widgets={widgets}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    bg={'transparent'}
    color={'success'}
    height={150}
  />
)

export default SampleDonutChartWidget8
