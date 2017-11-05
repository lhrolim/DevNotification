import React from 'react'
import Widget from '../../elements/Widget'

import SampleLineChart1 from './SampleLineChart1'
import SampleLineChart2 from './SampleLineChart2'
import SampleLineChart3 from './SampleLineChart3'

const LineCharts = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Line charts"
        description="Use the following examples as a starting point for line charts">
        <div className="row m-b-20">
          <div className="col-12 col-xl-6">
            <SampleLineChart1 />
          </div>
          <div className="col-12 col-xl-6">
            <SampleLineChart2 />
          </div>
        </div>
        <div className="row m-b-20">
          <div className="col-12 col-xl-6">
            <SampleLineChart3 />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)

export default LineCharts
