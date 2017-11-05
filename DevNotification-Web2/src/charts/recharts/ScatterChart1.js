import React from 'react'
import {connect} from 'react-redux'
import {random} from '../../functions'
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const data = []
for (let i = 0; i < 50; i++) {
  data.push({x: random(0, 100), y: random(0, 100), z: random(0, 100)})
}

const ScatterChart1 = ({colors}) => (
  <ResponsiveContainer width="100%" height={300}>
    <ScatterChart margin={{top: 10, right: 10, bottom: 10, left: 10}}>
      <XAxis dataKey={'x'} name="stature" unit="cm" />
      <YAxis dataKey={'y'} name="weight" unit="kg" />
      <Scatter name="Example" data={data} fill={colors.danger} />
      <CartesianGrid />
      <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
    </ScatterChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(ScatterChart)
