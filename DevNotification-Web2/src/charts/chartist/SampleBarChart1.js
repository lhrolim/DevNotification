import React from 'react'
import ChartistGraph from 'react-chartist'

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  series: [
    [800000, 1200000, 1400000, 1300000],
    [200000, 400000, 500000, 300000],
    [100000, 200000, 400000, 600000]
  ]
}

const options = {
  stackBars: false
}

const SampleBarChart1 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Bar'}
    className="series-a-danger series-b-info series-c-success"
    style={{height: '300px'}}
  />
)
export default SampleBarChart1
