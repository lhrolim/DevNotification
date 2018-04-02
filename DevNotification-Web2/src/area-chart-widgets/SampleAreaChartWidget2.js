import React from 'react'
import AreaChartWidget2 from './AreaChartWidget2'
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

const SampleAreaChartWidget2 = () => (
  <AreaChartWidget2 widgets={widgets} color={'success'} height={120} />
)

export default SampleAreaChartWidget2
