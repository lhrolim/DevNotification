import React from 'react'
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const CustomSlider = createSliderWithTooltip(Slider)
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

const SliderWithTooltip = ({
  min,
  max,
  defaultValue,
  onChange,
  onAfterChange
}) => (
  <CustomSlider
    min={min}
    max={max}
    defaultValue={defaultValue}
    handle={handle}
    onChange={onChange}
    onAfterChange={onAfterChange}
  />
)

export default SliderWithTooltip
