import React from 'react'
import Widget from '../elements/Widget'
import 'chartist/dist/chartist.min.css'
import '../css/charts/chartist.css'

import SamplePieChart1 from './SamplePieChart1'
import SamplePieChart2 from './SamplePieChart2'
import SamplePieChart3 from './SamplePieChart3'

import SampleDonutChart1 from './SampleDonutChart1'
import SampleDonutChart2 from './SampleDonutChart2'
import SampleDonutChart3 from './SampleDonutChart3'

const PieAndDonutCharts = () => (
  <div>
    <div className="row">
      <div className="col">
        <Widget
          title="Donut and half donut charts"
          description="Use the following examples as a starting point for donut and half donut charts">
          <div className="row">
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
    <div className="row">
      <div className="col">
        <Widget
          title="Pie charts"
          description="Use the following examples as a starting point for pie charts">
          <div className="row">
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
  </div>
)
export default PieAndDonutCharts
