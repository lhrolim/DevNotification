import React from 'react'
import Widget from '../../elements/Widget'

import SampleDonutChart1 from './SampleDonutChart1'
import SampleDonutChart2 from './SampleDonutChart2'
import SampleDonutChart3 from './SampleDonutChart3'

const DonutCharts = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Donut and half donut charts"
        description="Use the following examples as a starting point for donut and half donut charts">
        <div className="row m-b-20">
          <div className="col-12 col-xl-4">
            <SampleDonutChart1 />
          </div>
          <div className="col-12 col-xl-4">
            <SampleDonutChart2 />
          </div>
          <div className="col-12 col-xl-4">
            <SampleDonutChart3 />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)

export default DonutCharts
