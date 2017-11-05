import React from 'react'
import PropTypes from 'prop-types'
import '../css/text-widgets/text-widget-12.css'
const TextWidget12 = ({bg, color, align, title, subtitle}) => (
  <div className={`text-widget-12 text-${align} bg-${bg} color-${color}`}>
    <div className="row align-items-center">
      <div className="col align-self-end">
        <h5>{title}</h5>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col align-self-start">
        <h4>{subtitle}</h4>
      </div>
    </div>
  </div>
)

TextWidget12.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default TextWidget12
