import React from 'react'
import {connect} from 'react-redux'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const data = [
  {name: 'Monday', likes: 4000, tweets: 2400, amt: 2400},
  {name: 'Tuesday', likes: 3000, tweets: 1398, amt: 2210},
  {name: 'Wednesday', likes: 2000, tweets: 9800, amt: 2290},
  {name: 'Thursday', likes: 2780, tweets: 3908, amt: 2000},
  {name: 'Friday', likes: 1890, tweets: 4800, amt: 2181},
  {name: 'Saturday', likes: 2390, tweets: 3800, amt: 2500},
  {name: 'Sunday', likes: 3490, tweets: 4300, amt: 2100}
]

const LineChart1 = ({colors}) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="2 2" />
      <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
      <Legend />
      <Line
        type="monotone"
        dataKey="tweets"
        stroke={colors.primary}
        activeDot={{r: 8}}
      />
      <Line type="monotone" dataKey="likes" stroke={colors.secondary} />
    </LineChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(LineChart1)
