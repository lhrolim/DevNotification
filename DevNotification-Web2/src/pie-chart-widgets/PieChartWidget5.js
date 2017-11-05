import React from 'react'
import PropTypes from 'prop-types'
import PieChart1 from './PieChart1'
import IconWidget5 from '../icon-widgets/IconWidget5'
//import '../css/donut-chart-widgets/donut-chart-widget-5.css'

const PieChartWidget5 = ({widget, data, bg, colors, height, icon}) => (
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
        <PieChart1 data={data} colors={colors} height={height} />
      </div>
    </div>
  </div>
)

PieChartWidget5.propTypes = {
  widget: PropTypes.object,
  data: PropTypes.array,
  bg: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  icon: PropTypes.string
}

export default PieChartWidget5
