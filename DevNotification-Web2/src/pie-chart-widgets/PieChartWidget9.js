import React from 'react'
import PropTypes from 'prop-types'
import PieChart1 from './PieChart1'
import TextWidget9 from '../text-widgets/TextWidget9'
//import '../css/donut-chart-widgets/donut-chart-widget-9.css'

const PieChartWidget9 = ({widgets, data, colors, height}) => {
  return (
    <div className="donut-chart-widget-9">
      <div className="row align-items-center justify-content-center">
        <div className="col">
          <PieChart1 data={data} colors={colors} height={height} />
        </div>
        <div className="col">
          {widgets.map((widget, i) => (
            <div className="row text-center" key={i}>
              <div className="col col-lg-6">
                <TextWidget9 {...widget} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

PieChartWidget9.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.array,
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number
}

export default PieChartWidget9
