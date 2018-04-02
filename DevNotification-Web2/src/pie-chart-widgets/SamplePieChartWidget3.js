import React from 'react'
import PieChartWidget3 from './PieChartWidget3'

const widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Sales',
  subtitle: '$5.466',
  align: 'center'
}
const SamplePieChartWidget3 = () => (
  <PieChartWidget3
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    bg={'transparent'}
    color={'warning'}
    height={200}
  />
)

export default SamplePieChartWidget3
