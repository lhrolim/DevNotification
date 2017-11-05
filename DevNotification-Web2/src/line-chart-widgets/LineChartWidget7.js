import React from 'react'
import PropTypes from 'prop-types'
import LineChart1 from './LineChart1'
import IconWidget4 from '../icon-widgets/IconWidget4'

const LineChartWidget7 = ({widgets, color, height}) => (
  <div className={`area-chart-widget-7`}>
    <div className="row align-items-center text-center">
      {widgets.map((widget, i) => (
        <div className="col col-lg-4" key={i}>
          <IconWidget4 {...widget} />
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

LineChartWidget7.defaultProps = {
  height: 100
}

LineChartWidget7.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number
}

export default LineChartWidget7
