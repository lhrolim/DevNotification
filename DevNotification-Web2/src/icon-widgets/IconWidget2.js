import React from 'react'
import PropTypes from 'prop-types'
import '../css/icon-widgets/icon-widget-2.css'

const IconWidget2 = ({bg, color, icon, iconColor, text}) => (
  <div className={`icon-widget-2 bg-${bg} color-${color}`}>
    <div className="row align-items-center justify-content-center text-center">
      <div className="col">
        <span className="text">{text}</span>
        <i className={`material-icons ${iconColor}`}>{icon}</i>
      </div>
    </div>
  </div>
)

IconWidget2.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  colorColor: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default IconWidget2
