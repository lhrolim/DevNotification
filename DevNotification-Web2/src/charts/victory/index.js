import React from 'react'
import Widget from '../../elements/Widget'
import PieChart1 from './PieChart1'
import LineChart1 from './LineChart1'
import LineChart2 from './LineChart2'
import BarChart1 from './BarChart1'
import BarChart2 from './BarChart2'

//https://formidable.com/open-source/victory/docs/victory-chart

const Index = () => (
  <div className="row">
    <div className="col">
      <Widget title="Empty page" description="This is an empty page">
        <LineChart2 />
        <PieChart1 />
        <LineChart1 />
        <BarChart1 />
        <BarChart2 />
      </Widget>
    </div>
  </div>
)
export default Index
