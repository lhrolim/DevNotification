import React from 'react'
import PropTypes from 'prop-types'
import '../css/icon-widgets/icon-widget-8.css'
const IconWidget8 = ({color, icon, iconColor, text, number}) => (
  <div className={`icon-widget-8 color-${color}`}>
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col flex-80 text-center align-self-center p-t-5">
            <i className={`material-icons ${iconColor}`}>{icon}</i>
          </div>
          <div className="col">
            <div className="number">{number}</div>
            <div className="text">{text}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
)

IconWidget8.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default IconWidget8
