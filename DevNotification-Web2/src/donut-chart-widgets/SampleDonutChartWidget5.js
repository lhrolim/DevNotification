import React from 'react'
import DonutChartWidget5 from './DonutChartWidget5'
import {random} from '../functions'

const widget = {
  bg: 'transparent',
  color: 'default',
  iconColor: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}
const SampleDonutChartWidget5 = () => (
  <DonutChartWidget5
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    color={'primary'}
    height={150}
  />
)

export default SampleDonutChartWidget5
