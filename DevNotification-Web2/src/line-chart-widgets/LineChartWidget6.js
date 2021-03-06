import React from 'react'
import PropTypes from 'prop-types'
import LineChart1 from './LineChart1'
import IconWidget6 from '../icon-widgets/IconWidget6'
//import '../css/area-chart-widgets/area-chart-widget-6.css'

const LineChartWidget6 = ({widget, bg, color, height, icon}) => (
  <div className={`area-chart-widget-6 bg-${bg}`}>
    <div className="row align-items-center">
      <div className="col">
        <div className="p-10">
          <IconWidget6 {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <LineChart1 color={color} height={height} />
      </div>
    </div>
  </div>
)

LineChartWidget6.propTypes = {
  widget: PropTypes.object,
  bg: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string
}

export default LineChartWidget6
