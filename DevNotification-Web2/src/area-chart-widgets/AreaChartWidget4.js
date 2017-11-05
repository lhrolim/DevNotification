import React from 'react'
import PropTypes from 'prop-types'
import AreaChart1 from './AreaChart1'
import TextWidget9 from '../text-widgets/TextWidget9'
//import '../css/area-chart-widgets/area-chart-widget-4.css'

const AreaChartWidget4 = ({widget, bg, color, height}) => (
  <div className={`area-chart-widget-4 bg-${bg}`}>
    <div className="row align-items-start text-right">
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

AreaChartWidget4.propTypes = {
  widget: PropTypes.object,
  bg: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number
}

export default AreaChartWidget4
