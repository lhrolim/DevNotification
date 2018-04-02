import React from 'react'
import Widget from '../../elements/Widget'
import LineChart1 from './LineChart1'
import BarChart1 from './BarChart1'
import StackedBarChart1 from './StackedBarChart1'
import AreaChart1 from './AreaChart1'
import StackedAreaChart1 from './StackedAreaChart1'
import CombinedChart1 from './CombinedChart1'
import PieChart1 from './PieChart1'
import PieChart2 from './PieChart2'
import PieChart3 from './PieChart3'
import PieChart4 from './PieChart4'

const Recharts = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Stacked Bar chart"
        description="Use the following examples as a starting point for stacked bar charts">
        <StackedBarChart1 />
      </Widget>
      <Widget
        title="Line chart"
        description="Use the following examples as a starting point for line charts">
        <LineChart1 />
      </Widget>
      <Widget
        title="Bar chart"
        description="Use the following examples as a starting point for bar charts">
        <BarChart1 />
      </Widget>
      <Widget
        title="Area chart"
        description="Use the following examples as a starting point for area charts">
        <AreaChart1 />
      </Widget>
      <Widget
        title="Stacked area chart"
        description="Use the following examples as a starting point for stacked area charts">
        <StackedAreaChart1 />
      </Widget>
      <Widget
        title="Combined chart"
        description="Use the following examples as a starting point for combined charts">
        <CombinedChart1 />
      </Widget>
      <Widget
        title="Pie and donut charts"
        description="Use the following examples as a starting point for pie and donut charts">
        <div className="row">
          <div className="col-12 col-md-6">
            <PieChart3 />
          </div>
          <div className="col-12 col-md-6">
            <PieChart4 />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <PieChart1 />
          </div>
          <div className="col-12 col-md-6">
            <PieChart2 />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)
export default Recharts
