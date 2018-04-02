import React from 'react'
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const CustomRangeSlider = createSliderWithTooltip(Slider.Range)
const Handle = Slider.Handle

const handle = props => {
  const {value, dragging, index, ...restProps} = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

const RangeSliderWithTooltip = ({
  min,
  max,
  defaultValue,
  onChange,
  onAfterChange
}) => (
  <CustomRangeSlider
    min={0}
    max={100}
    defaultValue={defaultValue}
    tipFormatter={value => `${value}%`}
    onChange={onChange}
    onAfterChange={onAfterChange}
    handle={handle}
  />
)
export default RangeSliderWithTooltip
