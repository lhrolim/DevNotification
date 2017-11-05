import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleDonutChartWidget1 from '../../donut-chart-widgets/SampleDonutChartWidget1'
import SampleDonutChartWidget2 from '../../donut-chart-widgets/SampleDonutChartWidget2'
import SampleDonutChartWidget3 from '../../donut-chart-widgets/SampleDonutChartWidget3'
import SampleDonutChartWidget4 from '../../donut-chart-widgets/SampleDonutChartWidget4'
import SampleDonutChartWidget5 from '../../donut-chart-widgets/SampleDonutChartWidget5'
import SampleDonutChartWidget6 from '../../donut-chart-widgets/SampleDonutChartWidget6'
import SampleDonutChartWidget7 from '../../donut-chart-widgets/SampleDonutChartWidget7'
import SampleDonutChartWidget8 from '../../donut-chart-widgets/SampleDonutChartWidget8'

const DonutChartWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>DonutChartWidget1</code> component to show a chart with icons and statistics">
          <SampleDonutChartWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>DonutChartWidget2</code> component to show a chart with text">
          <SampleDonutChartWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Donut chart with text"
          description="Use the <code>DonutChartWidget3</code> and <code>DonutChartWidget4</code> components to show a chart with text">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleDonutChartWidget3 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleDonutChartWidget4 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Donut chart with text and icons"
          description="Use the <code>DonutChartWidget5</code> and <code>DonutChartWidget6</code> components to show a chart with text and icons">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleDonutChartWidget5 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleDonutChartWidget6 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>DonutChartWidget7</code> component to show a chart with icons and statistics">
          <SampleDonutChartWidget7 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>DonutChartWidget8</code> component to show a chart with text">
          <SampleDonutChartWidget8 />
        </Widget>
      </div>
    </div>
  </div>
)
export default DonutChartWidgets
