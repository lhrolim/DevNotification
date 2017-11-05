import React from 'react'
import PieChartWidget4 from './PieChartWidget4'
import {random} from '../functions'

const widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Visits',
  subtitle: random(100, 999),
  align: 'center'
}
const SamplePieChartWidget4 = () => (
  <PieChartWidget4
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    bg={'transparent'}
    color={'warning'}
    height={200}
  />
)

export default SamplePieChartWidget4
