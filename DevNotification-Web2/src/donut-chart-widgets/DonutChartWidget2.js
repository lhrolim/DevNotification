import React from 'react'
import PropTypes from 'prop-types'
import DonutChart1 from './DonutChart1'
import TextWidget9 from '../text-widgets/TextWidget9'
//import '../css/donut-chart-widgets/donut-chart-widget-2.css'

const DonutChartWidget2 = ({widgets, data, colors, height}) => {
  return (
    <div className="donut-chart-widget-2">
      <div className="row align-items-center justify-content-center">
        <div className="col">
          <DonutChart1 data={data} colors={colors} height={height} />
        </div>
      </div>
      <div className="row text-center">
        {widgets.map((widget, i) => (
          <div className="col col-lg-6" key={i}>
            <TextWidget9 {...widget} />
          </div>
        ))}
      </div>
    </div>
  )
}

DonutChartWidget2.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.array,
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number
}

export default DonutChartWidget2
