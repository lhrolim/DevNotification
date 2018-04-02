import React from 'react'
import PropTypes from 'prop-types'
import '../css/activity-widgets/activity-widget-5.css'

const ActivityWidget5 = ({items}) => (
  <div className="activity-widget-5">
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
            <p>{item.description}</p>
            <p>{item.date}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

ActivityWidget5.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ActivityWidget5
