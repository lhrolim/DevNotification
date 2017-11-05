import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleAreaChartWidget1 from '../../area-chart-widgets/SampleAreaChartWidget1'
import SampleAreaChartWidget2 from '../../area-chart-widgets/SampleAreaChartWidget2'
import SampleAreaChartWidget3 from '../../area-chart-widgets/SampleAreaChartWidget3'
import SampleAreaChartWidget4 from '../../area-chart-widgets/SampleAreaChartWidget4'
import SampleAreaChartWidget5 from '../../area-chart-widgets/SampleAreaChartWidget5'
import SampleAreaChartWidget6 from '../../area-chart-widgets/SampleAreaChartWidget6'
import SampleAreaChartWidget7 from '../../area-chart-widgets/SampleAreaChartWidget7'
import SampleAreaChartWidget8 from '../../area-chart-widgets/SampleAreaChartWidget8'

const SampleAreaChartWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>AreaChartWidget1</code> component to show a chart with icons and statistics">
          <SampleAreaChartWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>AreaChartWidget2</code> component to show a chart with text">
          <SampleAreaChartWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Area chart with text"
          description="Use the <code>AreaChartWidget3</code> and <code>AreaChartWidget4</code> components to show a chart with text">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleAreaChartWidget3 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleAreaChartWidget4 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Area chart with text and icons"
          description="Use the <code>AreaChartWidget5</code> and <code>AreaChartWidget6</code> components to show a chart with text and icons">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleAreaChartWidget5 />
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-b-10">
              <SampleAreaChartWidget6 />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with icons"
          description="Use the <code>AreaChartWidget7</code> component to show a chart with icons and statistics">
          <SampleAreaChartWidget7 />
        </Widget>
      </div>
      <div className="col-12 col-md-6 col-lg-4 m-b-10">
        <Widget
          title="Chart with text"
          description="Use the <code>AreaChartWidget8</code> component to show a chart with text">
          <SampleAreaChartWidget8 />
        </Widget>
      </div>
    </div>
  </div>
)
export default SampleAreaChartWidgets
