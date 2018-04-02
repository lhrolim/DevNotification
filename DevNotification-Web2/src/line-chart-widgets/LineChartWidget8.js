import React from 'react'
import PropTypes from 'prop-types'
import LineChart1 from './LineChart1'
import TextWidget9 from '../text-widgets/TextWidget9'
//import '../css/area-chart-widgets/area-chart-widget-8.css'

const LineChartWidget8 = ({widgets, bg, color, height}) => (
  <div className={`area-chart-widget-8 bg-${bg}`}>
    <div className="row align-items-center text-center">
      {widgets.map((widget, i) => (
        <div className="col col-lg-6" key={i}>
          <TextWidget9 {...widget} />
        </div>
      ))}
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <LineChart1 color={color} height={height} />
      </div>
    </div>
  </div>
)

LineChartWidget8.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  bg: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number
}

export default LineChartWidget8
