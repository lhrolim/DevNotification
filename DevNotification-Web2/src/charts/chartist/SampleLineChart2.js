import React from 'react'
import ChartistGraph from 'react-chartist'

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -2.5, -1, -2, -1],
    [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
  ]
}
const options = {
  high: 3,
  low: -3,
  showArea: false,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  axisY: {
    onlyInteger: true
  },
  axisX: {
    onlyInteger: true,
    showLabel: false,
    showGrid: false
  }
}

const SampleLineChart2 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Line'}
    className="series-a-danger series-b-info series-c-warning series-d-success"
    style={{height: '300px'}}
  />
)
export default SampleLineChart2
