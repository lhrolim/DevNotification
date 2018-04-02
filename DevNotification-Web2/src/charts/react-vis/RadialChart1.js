import React from 'react'

import {XYPlot, XAxis, YAxis, MarkSeries, CircularGridLines} from 'react-vis'

const data = [
  {r: 1, theta: Math.PI / 3, size: 30},
  {r: 1.7, theta: 2 * Math.PI / 3, size: 10},
  {r: 2, theta: Math.PI, size: 1},
  {r: 3, theta: 3 * Math.PI / 2, size: 12},
  {r: 2.5, theta: Math.PI / 4, size: 4},
  {r: 0, theta: Math.PI / 4, size: 1}
]

const margin = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10
}

const WIDTH = 300
const HEIGHT = 300

export default class RadialChart1 extends React.Component {
  render() {
    return (
      <XYPlot
        margin={margin}
        xDomain={[-3, 3]}
        yDomain={[-3, 3]}
        width={WIDTH}
        height={HEIGHT}>
        <CircularGridLines />
        <XAxis top={(HEIGHT - margin.top) / 2} />
        <YAxis left={(WIDTH - margin.left - margin.right) / 2} />
        <MarkSeries
          strokeWidth={2}
          sizeRange={[5, 15]}
          data={data.map(row => ({
            ...row,
            x: Math.cos(row.theta) * row.r,
            y: Math.sin(row.theta) * row.r
          }))}
        />
      </XYPlot>
    )
  }
}
