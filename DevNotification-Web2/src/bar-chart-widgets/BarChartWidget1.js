import React from 'react'
import PropTypes from 'prop-types'
import BarChart1 from './BarChart1'
import IconWidget4 from '../icon-widgets/IconWidget4'
//import '../css/bar-chart-widgets/bar-chart-widget-1.css'

const BarChartWidget1 = ({widgets, color, height}) => (
  <div className="bar-chart-widget-1">
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <BarChart1 color={color} height={height} />
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

BarChartWidget1.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string,
  height: PropTypes.number
}
export default BarChartWidget1
