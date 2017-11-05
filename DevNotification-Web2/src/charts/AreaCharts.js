import React from 'react'
import Widget from '../elements/Widget'
import 'chartist/dist/chartist.min.css'
import '../css/charts/chartist.css'

import SampleAreaChart1 from './SampleAreaChart1'
import SampleAreaChart2 from './SampleAreaChart2'
import SampleAreaChart3 from './SampleAreaChart3'

const AreaCharts = () => (
  <div>
    <div className="row">
      <div className="col">
        <Widget
          title="Area and area charts"
          description="Use the following examples as a starting point for line and area charts">
          <div className="row m-b-20">
            <div className="col-12 col-xl-6">
              <SampleAreaChart1 />
            </div>
          </div>
          <div className="row m-b-20">
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
  </div>
)
export default AreaCharts
