import React from 'react'
import PropTypes from 'prop-types'
import BarChart1 from './BarChart1'
import TextWidget9 from '../text-widgets/TextWidget9'

const BarChartWidget8 = ({widgets, color, height}) => (
  <div className="bar-chart-widget-8">
    <div className="row align-items-center text-center">
      {widgets.map((widget, i) => (
        <div className="col col-lg-6" key={i}>
          <TextWidget9 {...widget} />
        </div>
      ))}
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <BarChart1 color={color} height={height} />
      </div>
    </div>
  </div>
)

BarChartWidget8.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired
}

export default BarChartWidget8
