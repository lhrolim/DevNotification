import React from 'react'
import ChartistGraph from 'react-chartist'

const data = {
  series: [20, 10, 30, 40]
}

const sum = (a, b) => a + b

const options = {
  donut: true,
  chartPadding: 30,
  labelOffset: 40,
  labelDirection: 'explode',
  labelInterpolationFnc: value =>
    Math.round(value / data.series.reduce(sum) * 100) + '%'
}

const SampleDonutChart2 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Pie'}
    className="series-a-danger series-b-info series-c-success series-d-warning"
    style={{height: '300px'}}
  />
)
export default SampleDonutChart2
