import React from 'react'
import ChartistGraph from 'react-chartist'

const DonutChart1 = ({data, colors, height}) => {
  let style = {
    height: (height || 100) + 'px'
  }
  let chartData = {
    series: data
  }
  let options = {
    donut: true,
    chartPadding: 0,
    labelOffset: 0,
    showLabel: false,
    donutWidth: 30
  }
  let series = ['series-a', 'series-b', 'series-c', 'series-d'].map(
    (serie, i) => `${serie}-${colors[i]}`
  )
  let className = `ct-chart ${series.join(' ')}`
  return (
    <ChartistGraph
      data={chartData}
      options={options}
      type={'Pie'}
      style={style}
      className={className}
    />
  )
}

export default DonutChart1
