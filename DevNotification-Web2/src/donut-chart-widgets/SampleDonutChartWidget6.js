import React from 'react'
import DonutChartWidget6 from './DonutChartWidget6'
import {random} from '../functions'

const widget = {
  bg: 'transparent',
  color: 'default',
  iconColor: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}
const SampleDonutChartWidget6 = () => (
  <DonutChartWidget6
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    color={'success'}
    height={150}
  />
)

export default SampleDonutChartWidget6
