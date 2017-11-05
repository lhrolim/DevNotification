import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis'

export default class BarChart3 extends React.Component {
  render() {
    return (
      <div>
        <XYPlot width={300} height={300} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            data={[{x: 2, y: 10}, {x: 4, y: 5}, {x: 5, y: 15}]}
          />
          <VerticalBarSeries
            data={[{x: 2, y: 12}, {x: 4, y: 2}, {x: 5, y: 11}]}
          />
        </XYPlot>
      </div>
    )
  }
}
