import React from 'react'
import Widget from '../../elements/DashboardWidget'
import AreaChart from './AreaChart'

const Section2 = () => (
  <Widget title="Sales" description="Weekly sales performance">
    <div className="row">
      <div className="col">
        <AreaChart />
      </div>
    </div>
  </Widget>
)
export default Section2
