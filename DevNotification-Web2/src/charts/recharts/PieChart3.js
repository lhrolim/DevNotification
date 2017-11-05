import React from 'react'
import {connect} from 'react-redux'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
} from 'recharts'

const data = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200}
]

const PieChart3 = ({colors}) => {
  const COLORS = [
    colors.primary,
    colors.secondary,
    colors.warning,
    colors.danger
  ]
  return (
    <ResponsiveContainer width={'100%'} height={400}>
      <PieChart>
        <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          label
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
