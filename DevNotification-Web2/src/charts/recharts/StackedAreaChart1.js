import React from 'react'
import {connect} from 'react-redux'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const data = [
  {name: 'Page A', likes: 4000, tweets: 2400, stars: 2400},
  {name: 'Page B', likes: 3000, tweets: 1398, stars: 2210},
  {name: 'Page C', likes: 2000, tweets: 9800, stars: 2290},
  {name: 'Page D', likes: 2780, tweets: 3908, stars: 2000},
  {name: 'Page E', likes: 1890, tweets: 4800, stars: 2181},
  {name: 'Page F', likes: 2390, tweets: 3800, stars: 2500},
  {name: 'Page G', likes: 3490, tweets: 4300, stars: 2100}
]

const StackedAreaChart1 = ({colors}) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip cursor={{stroke: 'none', fill: 'none'}} />
      <Area
        type="monotone"
        dataKey="likes"
        stackId="1"
        stroke={colors.primary}
        fill={colors.primary}
      />
      <Area
        type="monotone"
        dataKey="tweets"
        stackId="1"
        stroke={colors.warning}
        fill={colors.warning}
      />
      <Area
        type="monotone"
        dataKey="stars"
        stackId="1"
        stroke={colors.danger}
        fill={colors.danger}
      />
    </AreaChart>
  </ResponsiveContainer>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(StackedAreaChart1)
