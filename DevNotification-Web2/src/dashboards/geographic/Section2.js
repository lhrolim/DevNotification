import React from 'react'
import Widget from '../../elements/DashboardWidget'
import VectorMap from './VectorMap'

const Section2 = () => (
  <Widget title="World map" description="Geographic sales performance">
    <div className="row">
      <div className="col">
        <VectorMap />
      </div>
    </div>
  </Widget>
)
export default Section2
