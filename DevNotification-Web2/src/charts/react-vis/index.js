import React from 'react'
import Widget from '../../elements/Widget'
import DonutChart1 from './DonutChart1'
import DonutChart2 from './DonutChart2'
import DonutChart3 from './DonutChart3'
import RadialChart1 from './RadialChart1'
import AreaChart1 from './AreaChart1'
import BarChart1 from './BarChart1'
import BarChart2 from './BarChart2'
import BarChart3 from './BarChart3'
import LineChart1 from './LineChart1'
import LineChart2 from './LineChart2'
import LineChart3 from './LineChart3'
import LineChart4 from './LineChart4'
import LineChart5 from './LineChart5'
import LineChart6 from './LineChart6'
import LineChart7 from './LineChart7'
import ScatterChart1 from './ScatterChart1'
import HeatmapChart1 from './HeatmapChart1'
import RadarChart1 from './RadarChart1'
import '../../css/charts/react-vis.css'

const Index = () => (
  <div className="row">
    <div className="col">
      <Widget title="Empty page" description="This is an empty page">
        <LineChart7 />
        <LineChart6 />
        <LineChart5 />
        <DonutChart1 />
        <DonutChart2 />
        <DonutChart3 />
        <RadialChart1 />
        <BarChart1 />
        <BarChart2 />
        <BarChart3 />
        <AreaChart1 />
        <LineChart1 />
        <LineChart2 />
        <LineChart3 />
        <LineChart4 />
        <ScatterChart1 />
        <HeatmapChart1 />
        <RadarChart1 />
      </Widget>
    </div>
  </div>
)
export default Index
