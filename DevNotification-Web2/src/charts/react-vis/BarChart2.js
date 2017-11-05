import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries
} from 'react-vis'

export default class BarChart2 extends React.Component {
  render() {
    return (
      <div>
        <XYPlot width={300} height={300} stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <HorizontalBarSeries
            data={[{y: 1, x: 10}, {y: 2, x: 5}, {y: 3, x: 15}]}
          />
          <HorizontalBarSeries
            data={[{y: 1, x: 12}, {y: 2, x: 2}, {y: 3, x: 11}]}
          />
        </XYPlot>
      </div>
    )
  }
}
