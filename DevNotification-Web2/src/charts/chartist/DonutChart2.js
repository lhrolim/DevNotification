import React from 'react'
import ChartistGraph from 'react-chartist'
//import {random} from '../functions'

/*
  let data = {
    series: [20, 10, 30, 40]
  }
  let options = {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false,
    chartPadding: 0,
    labelOffset: 0
  }
	*/

/*
  let data = {
    series: [20, 10, 30, 40]
  }
  let options = {
    donut: false,
    total: 200,
    showLabel: false,
    chartPadding: 0,
    labelOffset: 0
  }
	*/

/*
  let data = {
    series: [5, 3, 4]
  }
  let sum = function(a, b) {
    return a + b
  }
  let options = {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data.series.reduce(sum) * 100) + '%'
    },
    donut: false,
    total: 200,
    showLabel: false,
    chartPadding: 0,
    labelOffset: 0
  }
	*/

/*
  let data = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
  }
  let options = {
    labelInterpolationFnc: function(value) {
      return value[0]
    },
    donut: false,
    total: 200,
    showLabel: false,
    chartPadding: 0,
    labelOffset: 0
  }
	*/

const DonutChart1 = ({colors, height}) => {
  let style = {
    height: (height || 80) + 'px'
  }
  let options = {
    donut: true,
    chartPadding: 0,
    labelOffset: 0
  }

  let className = `ct-chart series-a-${colors[0]}`
  return (
    <ChartistGraph
      data={data}
      options={options}
      type={'Line'}
      style={style}
      className={className}
    />
  )
}

export default DonutChart1
