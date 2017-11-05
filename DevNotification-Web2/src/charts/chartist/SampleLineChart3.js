import React from 'react'
import Chartist from 'chartist'
import ChartistGraph from 'react-chartist'
import moment from 'moment'

const data = {
  series: [
    {
      name: 'series-1',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 40},
        {x: new Date(143340052600), y: 45},
        {x: new Date(143366652600), y: 40},
        {x: new Date(143410652600), y: 20},
        {x: new Date(143508652600), y: 32},
        {x: new Date(143569652600), y: 18},
        {x: new Date(143579652600), y: 11}
      ]
    },
    {
      name: 'series-2',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 35},
        {x: new Date(143334652600), y: 30},
        {x: new Date(143384652600), y: 30},
        {x: new Date(143568652600), y: 10}
      ]
    }
  ]
}

const options = {
  axisX: {
    type: Chartist.FixedScaleAxis,
    divisor: 5,
    labelInterpolationFnc: function(value) {
      return moment(value).format('MMM D')
    }
  },
  fullWidth: true,
  showArea: false
}

const SampleLineChart3 = () => (
  <ChartistGraph
    data={data}
    options={options}
    type={'Line'}
    className="series-a-primary series-b-secondary"
    style={{height: '300px'}}
  />
)
export default SampleLineChart3
