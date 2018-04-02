import React from 'react'
import {connect} from 'react-redux'
import {ResponsiveContainer, BarChart, Bar, Tooltip} from 'recharts'
import {random} from '../functions'

const data = Array.from(Array(20).keys()).map(v => {
  return {name: `key: ${v}`, value: random(20, 100)}
})

const BarChart1 = ({colors, color, height}) => (
  <ResponsiveContainer width="100%" height={height}>
    <BarChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
      <Tooltip
        cursor={{stroke: 'none', fill: 'none'}}
        labelFormatter={e => data[e].name}
      />
      <Bar
        type="monotone"
        dataKey="value"
        stroke={colors[color]}
        fill={colors[color]}
      />
    </BarChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(BarChart1)
