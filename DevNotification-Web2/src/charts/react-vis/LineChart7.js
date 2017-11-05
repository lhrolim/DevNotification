import React from 'react'

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  Hint
} from 'react-vis'

export default class LineChart7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
    this._rememberValue = this._rememberValue.bind(this)
    this._forgetValue = this._forgetValue.bind(this)
  }

  _rememberValue(value) {
    this.setState({value})
  }

  _forgetValue() {
    this.setState({
      value: null
    })
  }

  render() {
    const {value} = this.state
    return (
      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
        />
        {value ? <Hint value={value} /> : null}
      </XYPlot>
    )
  }
}
