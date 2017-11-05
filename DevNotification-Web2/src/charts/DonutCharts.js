import React from 'react'
import Widget from '../elements/Widget'
import 'chartist/dist/chartist.min.css'
import '../css/charts/chartist.css'

import SampleDonutChart1 from './SampleDonutChart1'
import SampleDonutChart2 from './SampleDonutChart2'
import SampleDonutChart3 from './SampleDonutChart3'

const DonutCharts = () => (
  <div>
    <div className="row">
      <div className="col">
        <Widget
          title="Donut and half donut charts"
          description="Use the following examples as a starting point for donut and half donut charts">
          <div className="row m-b-20">
            <div className="col-12 col-xl-3">
              <SampleDonutChart1 />
            </div>
          </div>
          <div className="row m-b-20">
            <div className="col-12 col-xl-3">
              <SampleDonutChart2 />
            </div>
          </div>
          <div className="row m-b-20">
            <div className="col-12 col-xl-3">
              <SampleDonutChart3 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
)
export default DonutCharts
