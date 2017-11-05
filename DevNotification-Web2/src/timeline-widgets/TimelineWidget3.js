import React from 'react'
import PropTypes from 'prop-types'
import TimelineAction from './TimelineAction'
import '../css/timeline-widgets/timeline-widget-3.css'
const TimelineWidget3 = ({items}) => (
  <div className="timeline-widget-3">
    {items.map((item, i) => (
      <div
        className={`row justify-content-end align-items-center timeline-${item.color}`}
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

TimelineWidget3.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineWidget3
