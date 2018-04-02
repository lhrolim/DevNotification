import React from 'react'
import PieChartWidget2 from './PieChartWidget2'
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

const SamplePieChartWidget2 = () => (
  <PieChartWidget2
    widgets={widgets}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    height={200}
  />
)

export default SamplePieChartWidget2
