import React from 'react'
import Widget from '../../elements/Widget'
import AjaxExample from './AjaxExample'
import StaticExample from './StaticExample'

const Reactable = () => (
  <div className="row">
    <div className="col">
      <Widget title="Reactable" description="Ajax example">
        <AjaxExample />
      </Widget>
      <Widget title="Reactable" description="Static example">
        <StaticExample />
      </Widget>
    </div>
  </div>
)
export default Reactable
