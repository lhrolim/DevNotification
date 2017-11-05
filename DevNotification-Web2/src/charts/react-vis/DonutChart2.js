import React from 'react'
import {RadialChart} from 'react-vis'

const DonutChart2 = () => (
  <RadialChart
    innerRadius={0}
    radius={100}
    data={[{angle: 1}, {angle: 2}, {angle: 1}, {angle: 1}, {angle: 1}]}
    width={300}
    height={300}
  />
)
export default DonutChart2
