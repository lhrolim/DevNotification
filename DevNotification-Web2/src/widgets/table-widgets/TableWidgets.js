import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleTableWidget1 from '../../table-widgets/SampleTableWidget1'
import SampleTableWidget2 from '../../table-widgets/SampleTableWidget2'
import SampleTableWidget3 from '../../table-widgets/SampleTableWidget3'
import SampleTableWidget4 from '../../table-widgets/SampleTableWidget4'
import SampleTableWidget10 from '../../table-widgets/SampleTableWidget10'

const TableWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-lg-4">
        <Widget
          title="Stocks table"
          description="Use the <code>TableWidget10</code> component to show stock data">
          <SampleTableWidget10 />
        </Widget>
      </div>
      <div className="col-12 col-lg-4">
        <Widget
          title="Countries table"
          description="Use the <code>TableWidget1</code> component to show data with country flags">
          <SampleTableWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-lg-4">
        <Widget
          title="Icons table"
          description="Use the <code>TableWidget2</code> component to show data with icons">
          <SampleTableWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Widget
          title="Table with images"
          description="Use the <code>TableWidget3</code> component to show data with images">
          <SampleTableWidget3 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Widget
          title="Table with badges"
          description="Use the <code>TableWidget4</code> component to show data with badges">
          <SampleTableWidget4 />
        </Widget>
      </div>
    </div>
  </div>
)
export default TableWidgets
