import React from 'react'
import Widget from '../../elements/Widget'
import ReactSelectSimple from './ReactSelectSimple'
import ReactSelectMulti from './ReactSelectMulti'
import '../../css/forms/react-select/default.css'

const ReactSelectView = () => (
  <div>
    <div className="row">
      <div className="col">
        <Widget
          title="Simple example"
          description="Use the following example for simple selects">
          <div className="row">
            <div className="col col-md-4">
              <ReactSelectSimple />
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Multiple example"
          description="Use the following example for multiple selects">
          <div className="row">
            <div className="col col-md-4">
              <ReactSelectMulti />
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
)
export default ReactSelectView
