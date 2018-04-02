import React from 'react'
import PropTypes from 'prop-types'
import AreaChart1 from './AreaChart1'
import TextWidget9 from '../text-widgets/TextWidget9'
//import '../css/area-chart-widgets/area-chart-widget-3.css'

const AreaChartWidget3 = ({widget, bg, color, height}) => (
  <div className={`area-chart-widget-3 bg-${bg}`}>
    <div className="row align-items-start text-left">
      <div className="col">
        <div className="p-10">
          <TextWidget9 {...widget} />
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

AreaChartWidget3.propTypes = {
  widget: PropTypes.object,
  bg: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number
}

export default AreaChartWidget3
