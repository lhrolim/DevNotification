import React from 'react'
import {connect} from 'react-redux'
import {ResponsiveContainer, AreaChart, Area, Tooltip} from 'recharts'
import {random} from '../functions'

const data = Array.from(Array(10).keys()).map(v => {
  return {name: `key: ${v}`, value: random(20, 100)}
})

const AreaChart1 = ({colors, color, height}) => (
  <ResponsiveContainer width="100%" height={height}>
    <AreaChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
      <Tooltip
        cursor={{stroke: 'none', fill: 'none'}}
        labelFormatter={e => data[e].name}
      />
      <Area
        type="monotone"
        dataKey="value"
        stroke={colors[color]}
        fill={colors[color]}
      />
    </AreaChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(AreaChart1)
