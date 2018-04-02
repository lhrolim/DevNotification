import React from 'react'
import {connect} from 'react-redux'
import {ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from 'recharts'
import {random} from '../functions'

const data = [
  {name: 'Group A', value: random(0, 100)},
  {name: 'Group B', value: random(0, 100)},
  {name: 'Group C', value: random(0, 100)},
  {name: 'Group D', value: random(0, 100)}
]

const PieChart3 = ({colors, color, height}) => {
  const COLORS = [
    colors.primary,
    colors.secondary,
    colors.warning,
    colors.danger
  ]
  return (
    <ResponsiveContainer width={'100%'} height={height}>
      <PieChart>
        <Tooltip />
        <Pie
          data={data}
          innerRadius={height / 2 - 20}
          outerRadius={height / 2}
          dataKey="value"
          fill={colors.primary}>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(PieChart3)
