import React from 'react'
import {connect} from 'react-redux'
import {ResponsiveContainer, BarChart, Bar, Tooltip} from 'recharts'

const BarChart1 = ({colors, color, height, data}) => {
  let chartColor = color ? colors[color] : colors.info
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
        <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
        <Bar dataKey="x" fill={chartColor} />
      </BarChart>
    </ResponsiveContainer>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(BarChart1)
