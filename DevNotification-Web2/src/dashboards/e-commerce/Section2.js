import React from 'react'
import Widget from '../../elements/DashboardWidget'
import TableWidget3 from '../../table-widgets/TableWidget3'
import products from '../../json/products.json'

const Section2 = () => (
  <div className="row">
    <div className="col-12">
      <Widget
        title="Best selling products"
        description="Best sellers in your online store">
        <TableWidget3 items={products} amount={5} />
      </Widget>
    </div>
  </div>
)
export default Section2
