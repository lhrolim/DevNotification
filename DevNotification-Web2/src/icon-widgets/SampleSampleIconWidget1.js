import React from 'react'
import PropTypes from 'prop-types'
import '../css/icon-widgets/icon-widget-1.css'

const IconWidget1 = ({bg, color, icon, iconColor, text}) => (
  <div className={`icon-widget-1 bg-${bg} color-${color}`}>
    <div className="row align-items-center">
      <div className="col">
        <i className={`${icon} ${iconColor}`} />
      </div>
      <div className="col">
        <span>{text}</span>
      </div>
    </div>
  </div>
)

IconWidget1.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  colorColor: PropTypes.string,
  text: PropTypes.string
}

export default IconWidget1
