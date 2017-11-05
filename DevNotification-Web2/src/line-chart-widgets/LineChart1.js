import React from 'react'
import {connect} from 'react-redux'
import {ResponsiveContainer, LineChart, Line, Tooltip} from 'recharts'
import {random} from '../functions'

const data = Array.from(Array(10).keys()).map(v => {
  return {name: `key: ${v}`, value: random(20, 100)}
})

const LineChart1 = ({colors, color, height}) => (
  <ResponsiveContainer width="100%" height={height + 5}>
    <LineChart data={data} margin={{top: 5, right: 5, left: 5, bottom: 0}}>
      <Tooltip
        cursor={{stroke: 'none', fill: 'none'}}
        labelFormatter={e => data[e].name}
      />
      <Line type="monotone" dataKey="value" stroke={colors[color]} />
    </LineChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(LineChart1)
