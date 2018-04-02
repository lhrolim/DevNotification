import React from 'react'
import PropTypes from 'prop-types'
import '../css/icon-widgets/icon-widget-3.css'

const IconWidget3 = ({bg, color, icon, iconColor, text}) => (
  <div className={`icon-widget-3 bg-${bg} color-${color}`}>
    <div className="row align-items-center justify-content-center text-center">
      <div className="col">
        <i className={`material-icons ${iconColor}`}>{icon}</i>
      </div>
    </div>
    <div className="row align-items-center justify-content-center text-center">
      <div className="col">
        <span className="text">{text}</span>
      </div>
    </div>
  </div>
)

IconWidget3.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  colorColor: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default IconWidget3
