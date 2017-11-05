import React from 'react'
import Slider from 'rc-slider'

const RangeSlider = ({onChange, onAfterChange, min, max, defaultValue}) => (
  <Slider.Range
    onChange={onChange}
    onAfterChange={onAfterChange}
    min={min}
    max={max}
    defaultValue={defaultValue}
  />
)

export default RangeSlider
