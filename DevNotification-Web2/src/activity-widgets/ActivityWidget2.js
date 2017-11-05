import React from 'react'
import PropTypes from 'prop-types'
import '../css/activity-widgets/activity-widget-2.css'

const ActivityWidget2 = ({
  bg,
  color,
  title,
  subtitle,
  number,
  percent,
  percentColor,
  barValue,
  barColor
}) => {
  let style = {
    width: barValue + '%'
  }
  return (
    <div className={`activity-widget-2 bg-${bg} color-${color}`}>
      <div className="row align-items-center">
        <div className="col align-self-center text-left">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
        <div className="col align-self-center text-right">
          <div className="number">{number}</div>
          <div className={`percent color-${percentColor}`}>
            <span>({percent})</span>
            <i
              className={
                percentColor === 'danger'
                  ? 'fa fa-caret-down'
                  : 'fa fa-caret-up'
              }
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <div className="progress progress-sm">
            <div
              className={`progress-bar bg-${barColor}`}
              value={`${barValue}`}
              style={style}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ActivityWidget2.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  percentColor: PropTypes.string,
  barValue: PropTypes.number,
  barColor: PropTypes.string
}

export default ActivityWidget2
