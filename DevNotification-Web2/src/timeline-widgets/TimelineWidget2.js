import React from 'react'
import PropTypes from 'prop-types'
import TimelineAction from './TimelineAction'
import '../css/timeline-widgets/timeline-widget-2.css'

const TimelineWidget2 = ({items}) => (
  <div className="timeline-widget-2">
    {items.map((item, i) => (
      <div
        className={`row justify-content-start align-items-center timeline-${item.color} timeline-${item.position}`}
        key={i}>
        <div className={`col align-self-${item.position}`}>
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

TimelineWidget2.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineWidget2
