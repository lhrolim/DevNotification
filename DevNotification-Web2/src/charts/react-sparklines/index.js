import React from 'react'
import Widget from '../../elements/Widget'
import LineChart1 from './LineChart1'
const EmptyPage = () => (
  <div className="row">
    <div className="col">
      <Widget title="Empty page" description="This is an empty page">
        <LineChart1 />
      </Widget>
    </div>
  </div>
)
export default EmptyPage
