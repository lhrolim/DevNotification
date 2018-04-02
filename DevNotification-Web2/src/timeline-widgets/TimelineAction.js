import React from 'react'
import PropTypes from 'prop-types'
import '../css/timeline-widgets/timeline-action.css'

const TimelineAction = ({actions}) => (
  <div className="timeline-action">
    {actions.map((action, i) => (
      <div key={i}>
        <span className="text">{action.text}</span>
        <i className={action.icon} />
      </div>
    ))}
  </div>
)

TimelineAction.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TimelineAction
