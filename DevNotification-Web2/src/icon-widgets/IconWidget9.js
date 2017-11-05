import React from 'react'
import PropTypes from 'prop-types'
import '../css/icon-widgets/icon-widget-9.css'
const IconWidget9 = ({bg, color, icon, iconColor, text, number}) => (
  <div className={`icon-widget-9 bg-${bg} color-${color}`}>
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col flex-80 text-center align-self-center">
            <button className={`btn btn-${iconColor} btn-circle`}>
              <i className={`material-icons color-white`}>{icon}</i>
            </button>
          </div>
          <div className="col p-l-10 text-right">
            <div className="number">{number}</div>
            <div className="text">{text}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
)

IconWidget9.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  text: PropTypes.string,
  number: PropTypes.number
}

export default IconWidget9
