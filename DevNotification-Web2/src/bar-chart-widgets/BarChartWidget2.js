import React from 'react'
import PropTypes from 'prop-types'
import BarChart1 from './BarChart1'
import TextWidget9 from '../text-widgets/TextWidget9'
//import '../css/bar-chart-widgets/bar-chart-widget-2.css'

const BarChartWidget2 = ({widgets, color, height}) => (
  <div className="bar-chart-widget-2">
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <BarChart1 color={color} height={height} />
      </div>
    </div>
    <div className="row text-center">
      {widgets.map((widget, i) => (
        <div className="col col-lg-6" key={i}>
          <TextWidget9 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

BarChartWidget2.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string,
  height: PropTypes.number
}

export default BarChartWidget2
