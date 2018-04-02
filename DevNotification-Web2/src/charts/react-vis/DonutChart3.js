import React, {Component} from 'react'

import {RadialChart, Hint} from 'react-vis'

export default class DonutChart3 extends Component {
  state = {
    value: false
  }
  render() {
    const {value} = this.state
    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={100}
        radius={140}
        data={[
          {angle: 2, className: 'custom-class'},
          {angle: 6},
          {angle: 2},
          {angle: 3},
          {angle: 1}
        ]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
        width={300}
        height={300}>
        {value && <Hint value={value} />}
      </RadialChart>
    )
  }
}
