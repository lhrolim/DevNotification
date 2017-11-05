import React from 'react'
import PieChartWidget8 from './PieChartWidget8'
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

const SamplePieChartWidget8 = () => (
  <PieChartWidget8
    widgets={widgets}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    bg={'transparent'}
    color={'success'}
    height={200}
  />
)

export default SamplePieChartWidget8
