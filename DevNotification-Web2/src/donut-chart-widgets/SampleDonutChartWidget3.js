import React from 'react'
import DonutChartWidget3 from './DonutChartWidget3'

const widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Sales',
  subtitle: '$5.466',
  align: 'center'
}
const SampleDonutChartWidget3 = () => (
  <DonutChartWidget3
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    bg={'transparent'}
    color={'warning'}
    height={150}
  />
)

export default SampleDonutChartWidget3
