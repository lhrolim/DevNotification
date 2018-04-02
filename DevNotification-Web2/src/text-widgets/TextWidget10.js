import React from 'react'
import PropTypes from 'prop-types'
import '../css/text-widgets/text-widget-10.css'

const TextWidget10 = ({align, bg, color, title, subtitle}) => (
  <div className={`text-widget-10 text-${align} bg-${bg} color-${color}`}>
    <div className="row align-items-center">
      <div className="col align-self-end">
        <span className={`title color-${color}`}>{title}</span>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col align-self-start">
        <span className={`subtitle color-${color}`}>{subtitle}</span>
      </div>
    </div>
  </div>
)

TextWidget10.propTypes = {
  align: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default TextWidget10
