import React from 'react'
import {RadialChart} from 'react-vis'

const DonutChart1 = () => (
  <RadialChart
    innerRadius={100}
    radius={140}
    data={[{angle: 2}, {angle: 6}, {angle: 2}, {angle: 3}, {angle: 1}]}
    width={300}
    height={300}
  />
)
export default DonutChart1
