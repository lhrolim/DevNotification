import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleDonutChartWidget2 from '../../donut-chart-widgets/SampleDonutChartWidget2'
import SamplePieChartWidget2 from '../../pie-chart-widgets/SamplePieChartWidget2'

const Section6 = () => (
  <div>
    <div className="row">
      <div className="col-12 m-b-10">
        <Widget title="" description="">
          <SamplePieChartWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12 m-b-10">
        <Widget title="" description="">
          <SampleDonutChartWidget2 />
        </Widget>
      </div>
    </div>
  </div>
)
export default Section6
