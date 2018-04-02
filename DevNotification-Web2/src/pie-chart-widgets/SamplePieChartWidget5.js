import React from 'react'
import PieChartWidget5 from './PieChartWidget5'
import {random} from '../functions'

const widget = {
  bg: 'transparent',
  color: 'default',
  iconColor: 'default',
  icon: 'grade',
  text: 'Online revenue',
  number: random(10, 99)
}
const SamplePieChartWidget5 = () => (
  <PieChartWidget5
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    color={'primary'}
    height={200}
  />
)

export default SamplePieChartWidget5
