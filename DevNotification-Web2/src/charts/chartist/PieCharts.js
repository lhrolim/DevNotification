import React from 'react'
import Widget from '../../elements/Widget'

import SamplePieChart1 from './SamplePieChart1'
import SamplePieChart2 from './SamplePieChart2'
import SamplePieChart3 from './SamplePieChart3'

const PieCharts = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Pie charts"
        description="Use the following examples as a starting point for pie charts">
        <div className="row m-b-20">
          <div className="col-12 col-xl-4">
            <SamplePieChart1 />
          </div>
          <div className="col-12 col-xl-4">
            <SamplePieChart2 />
          </div>
          <div className="col-12 col-xl-4">
            <SamplePieChart3 />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)

export default PieCharts
