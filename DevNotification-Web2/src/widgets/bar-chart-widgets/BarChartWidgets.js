import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleBarChartWidget1 from '../../bar-chart-widgets/SampleBarChartWidget1'
import SampleBarChartWidget2 from '../../bar-chart-widgets/SampleBarChartWidget2'
import SampleBarChartWidget3 from '../../bar-chart-widgets/SampleBarChartWidget3'
import SampleBarChartWidget4 from '../../bar-chart-widgets/SampleBarChartWidget4'
import SampleBarChartWidget5 from '../../bar-chart-widgets/SampleBarChartWidget5'
import SampleBarChartWidget6 from '../../bar-chart-widgets/SampleBarChartWidget6'
import SampleBarChartWidget7 from '../../bar-chart-widgets/SampleBarChartWidget7'
import SampleBarChartWidget8 from '../../bar-chart-widgets/SampleBarChartWidget8'

const BarChartWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>BarChartWidget1</code> component to show a chart with icons and statistics">
          <SampleBarChartWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>BarChartWidget2</code> component to show a chart with text">
          <SampleBarChartWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Bar chart with text"
          description="Use the <code>BarChartWidget3</code> and <code>BarChartWidget4</code> components to show a chart with text">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleBarChartWidget3 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleBarChartWidget4 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Bar chart with text and icons"
          description="Use the <code>BarChartWidget5</code> and <code>BarChartWidget6</code> components to show a chart with text">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleBarChartWidget5 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleBarChartWidget6 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>BarChartWidget7</code> component to show a chart with icons and statistics">
          <SampleBarChartWidget7 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>BarChartWidget8</code> component to show a chart with text">
          <SampleBarChartWidget8 />
        </Widget>
      </div>
    </div>
  </div>
)
export default BarChartWidgets
