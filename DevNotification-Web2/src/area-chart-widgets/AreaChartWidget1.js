import React from 'react'
import PropTypes from 'prop-types'
import AreaChart1 from './AreaChart1'
import IconWidget4 from '../icon-widgets/IconWidget4'
import '../css/area-chart-widgets/area-chart-widget-1.css'

const AreaChartWidget1 = ({widgets, color, height}) => (
  <div className="area-chart-widget-1">
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <AreaChart1 color={color} height={height} />
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

AreaChartWidget1.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string,
  height: PropTypes.number
}

export default AreaChartWidget1
