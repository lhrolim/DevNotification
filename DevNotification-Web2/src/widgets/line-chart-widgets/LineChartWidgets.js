import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleLineChartWidget1 from '../../line-chart-widgets/SampleLineChartWidget1'
import SampleLineChartWidget2 from '../../line-chart-widgets/SampleLineChartWidget2'
import SampleLineChartWidget3 from '../../line-chart-widgets/SampleLineChartWidget3'
import SampleLineChartWidget4 from '../../line-chart-widgets/SampleLineChartWidget4'
import SampleLineChartWidget5 from '../../line-chart-widgets/SampleLineChartWidget5'
import SampleLineChartWidget6 from '../../line-chart-widgets/SampleLineChartWidget6'
import SampleLineChartWidget7 from '../../line-chart-widgets/SampleLineChartWidget7'
import SampleLineChartWidget8 from '../../line-chart-widgets/SampleLineChartWidget8'

const LineChartWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>LineChartWidget1</code> component to show a chart with icons and statistics">
          <SampleLineChartWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>LineChartWidget2</code> component to show a chart with text">
          <SampleLineChartWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Line chart with text"
          description="Use the <code>LineChartWidget3</code> and <code>LineChartWidget4</code> component to show a chart with text">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleLineChartWidget3 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleLineChartWidget4 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Line chart with text and icons"
          description="Use the <code>LineChartWidget5</code> and <code>LineChartWidget6</code> component to show a chart with text and icons">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleLineChartWidget5 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleLineChartWidget6 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>LineChartWidget7</code> component to show a chart with icons and statistics">
          <SampleLineChartWidget7 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>LineChartWidget8</code> component to show a chart with text">
          <SampleLineChartWidget8 />
        </Widget>
      </div>
    </div>
  </div>
)
export default LineChartWidgets
