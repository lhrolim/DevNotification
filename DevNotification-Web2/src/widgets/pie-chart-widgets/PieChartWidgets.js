import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SamplePieChartWidget1 from '../../pie-chart-widgets/SamplePieChartWidget1'
import SamplePieChartWidget2 from '../../pie-chart-widgets/SamplePieChartWidget2'
import SamplePieChartWidget3 from '../../pie-chart-widgets/SamplePieChartWidget3'
import SamplePieChartWidget4 from '../../pie-chart-widgets/SamplePieChartWidget4'
import SamplePieChartWidget5 from '../../pie-chart-widgets/SamplePieChartWidget5'
import SamplePieChartWidget6 from '../../pie-chart-widgets/SamplePieChartWidget6'
import SamplePieChartWidget7 from '../../pie-chart-widgets/SamplePieChartWidget7'
import SamplePieChartWidget8 from '../../pie-chart-widgets/SamplePieChartWidget8'

const PieChartWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>PieChartWidget1</code> component to show a chart with icons and statistics">
          <SamplePieChartWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>PieChartWidget2</code> component to show a chart with text">
          <SamplePieChartWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Pie chart with text"
          description="Use the <code>PieChartWidget3</code> and <code>PieChartWidget4</code> component to show a chart with text">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SamplePieChartWidget3 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SamplePieChartWidget4 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Pie chart with text and icons"
          description="Use the <code>PieChartWidget5</code> and <code>PieChartWidget6</code> component to show a chart with text and icons">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SamplePieChartWidget5 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SamplePieChartWidget6 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>PieChartWidget7</code> component to show a chart with icons and statistics">
          <SamplePieChartWidget7 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>PieChartWidget8</code> component to show a chart with text">
          <SamplePieChartWidget8 />
        </Widget>
      </div>
    </div>
  </div>
)
export default PieChartWidgets
