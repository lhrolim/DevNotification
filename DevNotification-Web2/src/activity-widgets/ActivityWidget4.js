import React from 'react'
import PropTypes from 'prop-types'
import '../css/activity-widgets/activity-widget-4.css'

const ActivityWidget4 = ({items}) => (
  <div className="activity-widget-4">
    <ul className="list-unstyled">
      {items.map((item, i) => (
        <li className="media" key={i}>
          <img
            className="d-flex align-self-center rounded-circle"
            alt=""
            src={item.img}
          />
          <div className="media-body">
            <p>{item.name}</p>
            <p>{item.title}</p>
            <p>{item.date}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

ActivityWidget4.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ActivityWidget4
