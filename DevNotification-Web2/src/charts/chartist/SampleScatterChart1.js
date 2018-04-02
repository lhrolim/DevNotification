import React from 'react'
import ChartistGraph from 'react-chartist'

const times = function(n: number) {
  return Array.apply(null, new Array(n))
}
const data = times(52)
  .map(Math.random)
  .reduce(
    function(data, rnd, index) {
      data.labels.push(index + 1)
      data.series.forEach(function(series) {
        series.push(Math.random() * 100)
      })
      return data
    },
    {
      labels: [],
      series: times(4).map(function() {
        return []
      })
    }
  )
const options = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value: number, index: number) {
      return index % 13 === 0 ? 'W' + value : null
    }
  }
}
const SampleScatterChart1 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Line'}
    className="series-a-danger series-b-info series-c-warning series-d-success"
    style={{height: '300px'}}
  />
)
export default SampleScatterChart1
