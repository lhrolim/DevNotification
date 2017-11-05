import React from 'react'
import {connect} from 'react-redux'
import {ResponsiveContainer, PieChart, Pie, Legend, Tooltip} from 'recharts'

const data = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200}
]

const PieChart2 = ({colors}) => (
  <ResponsiveContainer width={'100%'} height={400}>
    <PieChart>
      <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
      <Legend layout="horizontal" align="center" verticalAlign="bottom" />
      <Pie
        startAngle={180}
        endAngle={0}
        data={data}
        outerRadius={80}
        fill={colors.danger}
        cx={'50%'}
        cy={300}
        label
        dataKey="value"
      />
    </PieChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(PieChart2)
