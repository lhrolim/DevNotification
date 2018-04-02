import React from 'react'
import ChartistGraph from 'react-chartist'
const data = {
  series: [20, 10, 30, 40]
}
const options = {
  donut: true,
  donutWidth: 60,
  startAngle: 270,
  total: 200,
  showLabel: false
}
const SampleDonutChart3 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Pie'}
    className="series-a-danger series-b-info series-c-success series-d-warning"
    style={{height: '300px'}}
  />
)
export default SampleDonutChart3
