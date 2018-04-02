import React from 'react'
import Widget from '../../elements/DashboardWidget'
import ActivityWidget1 from '../../activity-widgets/ActivityWidget1'
import sales from '../../json/sales-2.json'

const Section5 = () => (
  <Widget title="Sales stream" description="Latest sales and customer actions">
    <ActivityWidget1 items={sales} amount={10} />
  </Widget>
)
export default Section5
