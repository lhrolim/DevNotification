import React from 'react'
import {connect} from 'react-redux'
import {ResponsiveContainer, PieChart, Pie, Tooltip} from 'recharts'

const data01 = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200}
]

const data02 = [
  {name: 'A1', value: 100},
  {name: 'A2', value: 300},
  {name: 'B1', value: 100},
  {name: 'B2', value: 80},
  {name: 'B3', value: 40},
  {name: 'B4', value: 30},
  {name: 'B5', value: 50},
  {name: 'C1', value: 100},
  {name: 'C2', value: 200},
  {name: 'D1', value: 150},
  {name: 'D2', value: 50}
]

const PieChart1 = ({colors}) => (
  <ResponsiveContainer width={'100%'} height={400}>
    <PieChart>
      <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
      <Pie
        dataKey="value"
        data={data01}
        cx={200}
        cy={200}
        outerRadius={60}
        fill={colors.success}
      />
      <Pie
        dataKey="value"
        data={data02}
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill={colors.info}
        label
      />
    </PieChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(PieChart1)
