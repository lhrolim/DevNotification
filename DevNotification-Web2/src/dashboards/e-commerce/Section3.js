import React from 'react'
import Widget from '../../elements/DashboardWidget'
import ActivityWidget1 from '../../activity-widgets/ActivityWidget1'
import sales from '../../json/sales-2.json'
import TableWidget1 from '../../table-widgets/TableWidget1'
import flags from '../../json/navbar-flags.json'

const Section3 = () => (
  <div className="row">
    <div className="col-12 col-xl-6">
      <Widget title="Store revenue" description="Most important markets">
        <TableWidget1 items={flags} amount={6} />
      </Widget>
    </div>
    <div className="col-12 col-xl-6">
      <Widget
        title="Sales stream"
        description="Latest sales and customer actions">
        <ActivityWidget1 items={sales} amount={6} />
      </Widget>
    </div>
  </div>
)
export default Section3
