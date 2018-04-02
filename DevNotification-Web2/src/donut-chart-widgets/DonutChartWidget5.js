import React from 'react'
import PropTypes from 'prop-types'
import DonutChart1 from './DonutChart1'
import IconWidget5 from '../icon-widgets/IconWidget5'
//import '../css/donut-chart-widgets/donut-chart-widget-5.css'

const DonutChartWidget5 = ({widget, data, bg, colors, height, icon}) => (
  <div className={`donut-chart-widget-5 bg-${bg}`}>
    <div className="row align-items-center">
      <div className="col">
        <div className="p-10">
          <IconWidget5 {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <DonutChart1 data={data} colors={colors} height={height} />
      </div>
    </div>
  </div>
)

DonutChartWidget5.propTypes = {
  widget: PropTypes.object,
  data: PropTypes.array,
  bg: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  icon: PropTypes.string
}

export default DonutChartWidget5
