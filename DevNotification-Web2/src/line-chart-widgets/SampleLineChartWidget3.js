import React from 'react'
import LineChartWidget3 from './LineChartWidget3'

let widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Sales',
  subtitle: '$5.466',
  align: 'left'
}

const SampleLineChartWidget3 = () => (
  <LineChartWidget3
    widget={widget}
    bg={'transparent'}
    color={'warning'}
    height={120}
  />
)

export default SampleLineChartWidget3
