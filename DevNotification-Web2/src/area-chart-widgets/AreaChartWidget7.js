import React from 'react'
import PropTypes from 'prop-types'
import AreaChart1 from './AreaChart1'
import IconWidget4 from '../icon-widgets/IconWidget4'

const AreaChartWidget7 = ({widgets, color, height}) => (
  <div className={`area-chart-widget-7`}>
    <div className="row align-items-center text-center">
      {widgets.map((widget, i) => (
        <div className="col col-lg-4" key={i}>
          <IconWidget4 {...widget} />
        </div>
      ))}
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <AreaChart1 color={color} height={height} />
      </div>
    </div>
  </div>
)

AreaChartWidget7.defaultProps = {
  height: 100
}

AreaChartWidget7.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number
}

export default AreaChartWidget7
