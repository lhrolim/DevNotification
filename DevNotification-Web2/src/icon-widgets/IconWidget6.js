import React from 'react'
import PropTypes from 'prop-types'
import '../css/icon-widgets/icon-widget-6.css'

const IconWidget6 = ({bg, color, icon, iconColor, text, number, padding}) => (
  <div className={`icon-widget-6 bg-${bg} color-${color} p-${padding}`}>
    <div className="row justify-content-between align-items-center">
      <div className="col text-left">
        <div className="row">
          <div className="col">
            <span className="text">{text}</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="number">{number}</span>
          </div>
        </div>
      </div>
      <div className="col text-right">
        <i className={`material-icons ${iconColor}`}>{icon}</i>
      </div>
    </div>
  </div>
)

IconWidget6.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  colorColor: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.number
}

IconWidget6.defaultProps = {
  padding: 10
}

export default IconWidget6
