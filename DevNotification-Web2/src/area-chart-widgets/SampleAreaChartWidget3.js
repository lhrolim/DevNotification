import React from 'react'
import AreaChartWidget3 from './AreaChartWidget3'

let widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Sales',
  subtitle: '$5.466',
  align: 'left'
}

const SampleAreaChartWidget3 = () => (
  <AreaChartWidget3
    widget={widget}
    bg={'transparent'}
    color={'warning'}
    height={120}
  />
)

export default SampleAreaChartWidget3
