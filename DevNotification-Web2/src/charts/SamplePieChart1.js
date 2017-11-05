import React from 'react'
import ChartistGraph from 'react-chartist'

const data = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
}
const options = {
  labelInterpolationFnc: function(value) {
    return value
  }
}

const SamplePieChart1 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Pie'}
    className="series-a-danger series-b-info series-c-success series-d-warning"
    style={{height: '300px'}}
  />
)
export default SamplePieChart1
