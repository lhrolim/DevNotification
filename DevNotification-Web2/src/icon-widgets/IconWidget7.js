import React from 'react'
import PropTypes from 'prop-types'
import '../css/icon-widgets/icon-widget-7.css'
const IconWidget7 = ({bg, color, icon, iconColor, text, number}) => (
  <div className={`icon-widget-7 bg-${bg} color-${color}`}>
    <div className="row align-items-center">
      <div className="col text-left align-self-center">
        <button className={`btn btn-${iconColor} btn-circle`}>
          <i className={`material-icons color-white`}>{icon}</i>
        </button>
      </div>
      <div className="col">
        <div className="row text-right">
          <div className="col align-self-end">
            <span className="number">{number}</span>
          </div>
        </div>
        <div className="row text-right">
          <div className="col align-self-start">
            <span className="text">{text}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

IconWidget7.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  text: PropTypes.string,
  number: PropTypes.number
}

export default IconWidget7
