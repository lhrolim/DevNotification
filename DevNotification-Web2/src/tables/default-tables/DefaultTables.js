import React from 'react'
import DefaultTable from './DefaultTable'
//import CondensedTable from './CondensedTable'
import StripedTable from './StripedTable'
import BorderedTable from './BorderedTable'
import UnborderedTable from './UnborderedTable'
import Widget from '../../elements/Widget'
import '../../css/tables/default-tables.css'

const DefaultTables = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Default table"
        description="Use the <code>DefaultTable</code> component for default table styles">
        <div className="row">
          <div className="col">
            <DefaultTable />
          </div>
        </div>
      </Widget>
      {/*
      <Widget
        title="Condensed table"
        description="Use the <code>CondensedTable</code> component for condensed tables">
        <div className="row">
          <div className="col">
            <CondensedTable />
          </div>
        </div>
      </Widget>
			*/}
      <Widget
        title="Striped table"
        description="Use the <code>StripedTable</code> component for striped tables">
        <div className="row">
          <div className="col">
            <StripedTable />
          </div>
        </div>
      </Widget>
      <Widget
        title="Bordered table"
        description="Use the <code>BorderedTable</code> component for bordered tables">
        <div className="row">
          <div className="col">
            <BorderedTable />
          </div>
        </div>
      </Widget>
      <Widget
        title="Unbordered table"
        description="Use the <code>UnborderedTable</code> component for tables without borders">
        <div className="row">
          <div className="col">
            <UnborderedTable />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)
export default DefaultTables
