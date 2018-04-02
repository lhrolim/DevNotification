import React from 'react'
import BarChartWidget3 from './BarChartWidget3'

let widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Sales',
  subtitle: '$5.466',
  align: 'left'
}

const SampleBarChartWidget3 = () => (
  <BarChartWidget3
    widget={widget}
    bg={'transparent'}
    color={'warning'}
    height={120}
  />
)

export default SampleBarChartWidget3
