import React from 'react'
import PropTypes from 'prop-types'
import TimelineAction from './TimelineAction'
import '../css/timeline-widgets/timeline-widget-1.css'

const TimelineWidget1 = ({items, amount}) => (
  <div className="timeline-widget-1">
    {items.slice(0, amount).map((item, i) => (
      <div
        className={`row justify-content-start align-items-center timeline-${item.color}`}
        key={i}>
        <div className="col">
          <div className="timeline-item">
            <p>{item.when}</p>
            <p>{item.text}</p>
            <TimelineAction actions={item.actions} />
          </div>
        </div>
      </div>
    ))}
  </div>
)

TimelineWidget1.defaultProps = {
  amount: 5
}

TimelineWidget1.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  amount: PropTypes.number
}

export default TimelineWidget1
