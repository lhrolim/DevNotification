import React from 'react'
import PieChartWidget6 from './PieChartWidget6'
import {random} from '../functions'

const widget = {
  bg: 'transparent',
  color: 'default',
  iconColor: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}
const SamplePieChartWidget6 = () => (
  <PieChartWidget6
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    color={'success'}
    height={200}
  />
)

export default SamplePieChartWidget6
