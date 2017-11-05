import React from 'react'
import Widget from '../elements/Widget'
import 'chartist/dist/chartist.min.css'
import '../css/charts/chartist.css'

import SampleScatterChart1 from './SampleScatterChart1'

const OtherCharts = () => (
  <div>
    <div className="row">
      <div className="col">
        <Widget
          title="Scatter chart"
          description="Use the following example as a starting point for a scatter chart">
          <div className="row">
            <div className="col">
              <SampleScatterChart1 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
)
export default OtherCharts
