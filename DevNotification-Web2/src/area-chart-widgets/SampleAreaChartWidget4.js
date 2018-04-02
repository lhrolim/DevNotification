import React from 'react'
import AreaChartWidget4 from './AreaChartWidget4'
import {random} from '../functions'

let widget = {
  bg: 'transparent',
  color: 'default',
  title: 'Visits',
  subtitle: random(100, 999),
  align: 'right'
}

const SampleAreaChartWidget4 = () => (
  <AreaChartWidget4
    widget={widget}
    bg={'transparent'}
    color={'warning'}
    height={120}
  />
)

export default SampleAreaChartWidget4
