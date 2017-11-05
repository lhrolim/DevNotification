import React from 'react'
import Widget from '../../elements/Widget'

import SampleAreaChart1 from './SampleAreaChart1'
import SampleAreaChart2 from './SampleAreaChart2'
import SampleAreaChart3 from './SampleAreaChart3'

const AreaCharts = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Area charts"
        description="Use the following examples as a starting point for area charts">
        <div className="row m-b-20">
          <div className="col-12 col-xl-6">
            <SampleAreaChart1 />
          </div>
          <div className="col-12 col-xl-6">
            <SampleAreaChart2 />
          </div>
        </div>
        <div className="row m-b-20">
          <div className="col-12 col-xl-6">
            <SampleAreaChart3 />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)

export default AreaCharts
