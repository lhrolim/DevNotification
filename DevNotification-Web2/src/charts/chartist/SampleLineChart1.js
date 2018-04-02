import React from 'react'
import ChartistGraph from 'react-chartist'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  series: [[1000, 1200, 1300, 1200, 1440, 1800, 1500]]
}
const options = {
  fullWidth: true,
  showArea: false
}

const SampleLineChart1 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Line'}
    className="series-a-danger series-b-info"
    style={{height: '300px'}}
  />
)
export default SampleLineChart1
