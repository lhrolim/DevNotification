import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis'

export default class BarChart1 extends React.Component {
  render() {
    return (
      <div>
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            className="vertical-bar-series-example"
            data={[{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}]}
          />
          <VerticalBarSeries
            data={[{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}]}
          />
        </XYPlot>
      </div>
    )
  }
}
