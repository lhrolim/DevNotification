import React from 'react'
import PropTypes from 'prop-types'
import PieChart1 from './PieChart1'
import TextWidget9 from '../text-widgets/TextWidget9'
//import '../css/donut-chart-widgets/donut-chart-widget-3.css'

const PieChartWidget3 = ({widget, data, bg, colors, height}) => (
  <div className={`donut-chart-widget-3 bg-${bg}`}>
    <div className="row align-items-start text-center">
      <div className="col">
        <div className="p-10">
          <TextWidget9 {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <PieChart1 data={data} colors={colors} height={height} />
      </div>
    </div>
  </div>
)

PieChartWidget3.propTypes = {
  widget: PropTypes.object,
  data: PropTypes.array,
  bg: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number
}

export default PieChartWidget3
