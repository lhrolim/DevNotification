import React from 'react'
import Widget from '../../elements/Widget'
import SliderWithTooltip from './SliderWithTooltip'
import DefaultSlider from './Slider'
import RangeSlider from './RangeSlider'
import RangeSliderWithTooltip from './RangeSliderWithTooltip'
import 'rc-tooltip/assets/bootstrap.css'
import '../../css/forms/sliders.css'

class Sliders extends React.Component {
  constructor() {
    super()
    this.onChangeDefaultSlider = this.onChangeDefaultSlider.bind(this)
    this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this)
    this.onChangeSliderWithTooltip = this.onChangeSliderWithTooltip.bind(this)
    this.onChangeRangeSliderWithTooltip = this.onChangeRangeSliderWithTooltip.bind(
      this
    )
    this.state = {
      defaultSlider: 40,
      rangeSlider: [30, 70],
      sliderWithTooltip: 40,
      rangeSliderWithTooltip: [30, 70]
    }
  }

  onChangeDefaultSlider(e) {
    this.setState({
      defaultSlider: e
    })
  }

  onChangeRangeSlider(e) {
    this.setState({
      rangeSlider: e
    })
  }

  onChangeSliderWithTooltip(e) {
    this.setState({
      sliderWithTooltip: e
    })
  }

  onChangeRangeSliderWithTooltip(e) {
    this.setState({
      rangeSliderWithTooltip: e
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Widget
            title="Simple sliders"
            description="Use the following examples as a starting point for your custom sliders">
            <p>
              {'Value: '} {this.state.defaultSlider}
            </p>
            <DefaultSlider
              onChange={this.onChangeDefaultSlider}
              onAfterChange={this.onChangeDefaultSlider}
              min={0}
              max={100}
              defaultValue={this.state.defaultSlider}
            />
            <br />
            <p>
              {'Value: '} {this.state.rangeSlider[0]}
              {'-'}
              {this.state.rangeSlider[1]}
            </p>
            <RangeSlider
              onChange={this.onChangeRangeSlider}
              onAfterChange={this.onChangeRangeSlider}
              min={0}
              max={100}
              defaultValue={this.state.rangeSlider}
            />
          </Widget>
          <Widget
            title="Sliders with tooltips"
            description="Use the following examples as a starting point for sliders with tooltips">
            <p>
              {'Value: '} {this.state.sliderWithTooltip}
            </p>
            <SliderWithTooltip
              onChange={this.onChangeSliderWithTooltip}
              onAfterChange={this.onChangeSliderWithTooltip}
              min={0}
              max={100}
              defaultValue={this.state.sliderWithTooltip}
            />
            <br />
            <p>
              {'Value: '} {this.state.rangeSliderWithTooltip[0]}
              {'-'}
              {this.state.rangeSliderWithTooltip[1]}
            </p>
            <RangeSliderWithTooltip
              onChange={this.onChangeRangeSliderWithTooltip}
              onAfterChange={this.onChangeRangeSliderWithTooltip}
              min={0}
              max={100}
              defaultValue={this.state.rangeSliderWithTooltip}
            />
          </Widget>
        </div>
      </div>
    )
  }
}

export default Sliders
