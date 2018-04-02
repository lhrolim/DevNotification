import React from 'react'
import DonutChartWidget2 from './DonutChartWidget2'
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

const SampleDonutChartWidget2 = () => (
  <DonutChartWidget2
    widgets={widgets}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    height={150}
  />
)

export default SampleDonutChartWidget2
