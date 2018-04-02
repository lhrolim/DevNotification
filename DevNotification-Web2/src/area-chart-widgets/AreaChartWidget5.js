import React from 'react'
import PropTypes from 'prop-types'
import AreaChart1 from './AreaChart1'
import IconWidget5 from '../icon-widgets/IconWidget5'
//import '../css/area-chart-widgets/area-chart-widget-5.css'

const AreaChartWidget5 = ({widget, bg, color, height, icon}) => (
  <div className={`area-chart-widget-5 bg-${bg}`}>
    <div className="row align-items-center">
      <div className="col">
        <div className="p-10">
          <IconWidget5 {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <AreaChart1 color={color} height={height} />
      </div>
    </div>
  </div>
)

AreaChartWidget5.propTypes = {
  widget: PropTypes.object,
  bg: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string
}

export default AreaChartWidget5
