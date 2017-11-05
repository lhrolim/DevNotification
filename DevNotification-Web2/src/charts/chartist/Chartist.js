import React from 'react'
import 'chartist/dist/chartist.min.css'
import '../../css/charts/chartist.css'

import AreaCharts from './AreaCharts'
import BarCharts from './BarCharts'
import DonutCharts from './DonutCharts'
import LineCharts from './LineCharts'
import PieCharts from './PieCharts'

const Chartist = () => (
  <div>
    <AreaCharts />
    <BarCharts />
    <DonutCharts />
    <LineCharts />
    <PieCharts />
  </div>
)
export default Chartist
