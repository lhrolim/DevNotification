import React from 'react'
import PropTypes from 'prop-types'
import BarChart1 from './BarChart1'
import TextWidget1 from '../text-widgets/TextWidget1'

const BarChartWidget9 = ({widget, color, height}) => (
  <div className="bar-chart-widget-9">
    <div className="row align-items-center justify-content-center m-b-10">
      <div className="col">
        <div className="p-10">
          <TextWidget1 {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <BarChart1 color={color} height={height} data={widget.data} />
      </div>
    </div>
  </div>
)

BarChartWidget9.propTypes = {
  widget: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.number
}

export default BarChartWidget9
