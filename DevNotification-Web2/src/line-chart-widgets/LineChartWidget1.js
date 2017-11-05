import React from 'react'
import PropTypes from 'prop-types'
import LineChart1 from './LineChart1'
import IconWidget4 from '../icon-widgets/IconWidget4'
import '../css/area-chart-widgets/area-chart-widget-1.css'

const LineChartWidget1 = ({widgets, color, height}) => (
  <div className="area-chart-widget-1">
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <LineChart1 color={color} height={height} />
      </div>
    </div>
    <div className="row text-center">
      {widgets.map((widget, i) => (
        <div className="col col-lg-4" key={i}>
          <IconWidget4 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

LineChartWidget1.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string,
  height: PropTypes.number
}

export default LineChartWidget1
