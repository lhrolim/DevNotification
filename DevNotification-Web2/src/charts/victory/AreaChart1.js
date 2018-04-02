import React from 'react'
import {VictoryChart, VictoryArea} from 'victory'

const AreaChart1 = () => (
  <VictoryChart>
    <VictoryArea style={{data: {fill: '#c43a31'}}} />
  </VictoryChart>
)

export default AreaChart1
