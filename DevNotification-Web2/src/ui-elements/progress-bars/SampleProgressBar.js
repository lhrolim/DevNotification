import React from 'react'
import PropTypes from 'prop-types'
import {random} from '../functions'

const SampleProgressBar = ({color, value, size}) => {
  let style = {width: value + '%'}
  return (
    <div className={`progress progress-${size}`}>
      <div
        className={`progress-bar bg-${color}`}
        value={`${value}`}
        style={style}
        role="progressbar"
      />
    </div>
  )
}

SampleProgressBar.defaultProps = {
  color: 'info',
  value: random(40, 80),
  size: 'default'
}

SampleProgressBar.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string
}

export default SampleProgressBar
