import React from 'react'
import {connect} from 'react-redux'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const data = [
  {name: 'Monday', likes: 4000, tweets: 2400, stars: 5400},
  {name: 'Tuesday', likes: 3000, tweets: 1398, stars: 4210},
  {name: 'Wednesday', likes: 5000, tweets: 9800, stars: 2290},
  {name: 'Thursday', likes: 2780, tweets: 3908, stars: 7000},
  {name: 'Friday', likes: 5890, tweets: 4800, stars: 2181},
  {name: 'Saturday', likes: 2390, tweets: 3800, stars: 2500},
  {name: 'Sunday', likes: 3490, tweets: 4300, stars: 2100}
]

const CombinedChart1 = ({colors}) => (
  <ResponsiveContainer width="100%" height={300}>
    <ComposedChart
      data={data}
      margin={{top: 10, right: 10, left: 10, bottom: 10}}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
      <Legend />
      <CartesianGrid stroke="#ffffff" />
      <Area
        type="monotone"
        dataKey="stars"
        fill={colors.info}
        stroke={colors.info}
      />
      <Bar dataKey="tweets" barSize={20} fill={colors.warning} />
      <Line type="monotone" dataKey="likes" stroke={colors.danger} />
    </ComposedChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(CombinedChart1)
