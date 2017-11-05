import React from 'react'
import ChartistGraph from 'react-chartist'

const data = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]]
}
const options = {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 80
  }
}

const SampleBarChart2 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Bar'}
    className="series-a-danger series-b-info"
    style={{height: '300px'}}
  />
)
export default SampleBarChart2
