import React from 'react'
import PropTypes from 'prop-types'
import '../css/activity-widgets/activity-widget-3.css'
const ActivityWidget3 = ({items}) => (
  <div className="activity-widget-3">
    <ul className="list-unstyled">
      {items.map((item, i) => (
        <li className="media" key={i}>
          <img
            className="d-flex align-self-center rounded-circle"
            alt=""
            src={item.img}
          />
          <div className="media-body">
            <p>{item.title}</p>
            <p>{item.date}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
ActivityWidget3.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ActivityWidget3
