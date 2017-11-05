import React from 'react'
import Widget from '../../elements/Widget'

import SampleBarChart1 from './SampleBarChart1'
import SampleBarChart2 from './SampleBarChart2'
import SampleBarChart3 from './SampleBarChart3'
import SampleBarChart4 from './SampleBarChart4'

const BarCharts = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Bar charts"
        description="Use the following examples as a starting point for bar charts">
        <div className="row m-b-20">
          <div className="col-12 col-xl-6">
            <SampleBarChart1 />
          </div>
          <div className="col-12 col-xl-6">
            <SampleBarChart2 />
          </div>
        </div>
        <div className="row m-b-20">
          <div className="col-12 col-xl-6">
            <SampleBarChart3 />
          </div>
          <div className="col-12 col-xl-6">
            <SampleBarChart4 />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)

export default BarCharts
