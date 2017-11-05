import React from 'react'
import PropTypes from 'prop-types'
import BarChart1 from './BarChart1'
import IconWidget5 from '../icon-widgets/IconWidget5'
//import '../css/bar-chart-widgets/bar-chart-widget-5.css'

const BarChartWidget5 = ({widget, bg, color, height, icon}) => (
  <div className={`bar-chart-widget-5 bg-${bg}`}>
    <div className="row align-items-center">
      <div className="col">
        <div className="p-10">
          <IconWidget5 {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <BarChart1 color={color} height={height} />
      </div>
    </div>
  </div>
)

BarChartWidget5.propTypes = {
  widget: PropTypes.object,
  bg: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string
}

export default BarChartWidget5
