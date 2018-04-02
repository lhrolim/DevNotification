import React from 'react'
import ChartistGraph from 'react-chartist'

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  ]
}
const options = {
  seriesBarDistance: 10,
  stackBars: true
}

const SampleBarChart3 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Bar'}
    className="series-a-danger series-b-info series-c-success series-d-warning"
    style={{height: '300px'}}
  />
)
export default SampleBarChart3
