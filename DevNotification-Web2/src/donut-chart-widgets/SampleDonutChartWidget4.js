import React from 'react'
import DonutChartWidget4 from './DonutChartWidget4'
import {random} from '../functions'

const widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Visits',
  subtitle: random(100, 999),
  align: 'center'
}
const SampleDonutChartWidget4 = () => (
  <DonutChartWidget4
    widget={widget}
    colors={['success', 'warning', 'danger', 'info']}
    data={[20, 10, 30, 40]}
    bg={'transparent'}
    color={'warning'}
    height={150}
  />
)

export default SampleDonutChartWidget4
