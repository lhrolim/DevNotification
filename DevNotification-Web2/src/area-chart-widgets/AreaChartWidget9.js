import React from 'react'
import PropTypes from 'prop-types'
import AreaChart1 from './AreaChart1'
import TextWidget1 from '../text-widgets/TextWidget1'

const AreaChartWidget9 = ({widget, color, height}) => (
  <div className="line-chart-widget-9">
    <div className="row align-items-center justify-content-center m-b-10">
      <div className="col">
        <div className="p-10">
          <TextWidget1 {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <AreaChart1 color={color} height={height} data={widget.data} />
      </div>
    </div>
  </div>
)

AreaChartWidget9.propTypes = {
  widget: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.number
}

export default AreaChartWidget9
