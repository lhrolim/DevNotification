import React from 'react'
import Slider from 'rc-slider'

const DefaultSlider = ({onChange, onAfterChange, min, max, defaultValue}) => (
  <Slider
    onChange={onChange}
    onAfterChange={onAfterChange}
    min={min}
    max={max}
    defaultValue={defaultValue}
  />
)

export default DefaultSlider
