import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleActivityWidget1 from '../../activity-widgets/SampleActivityWidget1'
import SampleActivityWidget2 from '../../activity-widgets/SampleActivityWidget2'
import SampleActivityWidget3 from '../../activity-widgets/SampleActivityWidget3'
import SampleActivityWidget4 from '../../activity-widgets/SampleActivityWidget4'
import SampleActivityWidget5 from '../../activity-widgets/SampleActivityWidget5'
import SampleActivityWidget7 from '../../activity-widgets/SampleActivityWidget7'

const ActivityWidgets = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      <Widget
        title="List with badges"
        description="Use the <code>ActivityWidget1</code> component to show a list of items with badges">
        <SampleActivityWidget1 />
      </Widget>
      <Widget
        title="Text with progress bars"
        description="Use the <code>ActivityWidget2</code> component to show text with numbers and a progress bar">
        <SampleActivityWidget2 />
      </Widget>
      <Widget
        title="2 line list"
        description="Use the <code>ActivityWidget3</code> component to show a list of items in 2 lines">
        <SampleActivityWidget3 />
      </Widget>
      <Widget
        title="3 line list"
        description="Use the <code>ActivityWidget4</code> component to show a list of items in 3 lines">
        <SampleActivityWidget4 />
      </Widget>
    </div>
    <div className="col-12 col-lg-6">
      <Widget
        title="Task status"
        description="Use the <code>ActivityWidget7</code> component to show task or item status with progress bars">
        <SampleActivityWidget7 />
      </Widget>
      <Widget
        title="4 line list"
        description="Use the <code>ActivityWidget5</code> component to show a list of items in 4 lines">
        <SampleActivityWidget5 />
      </Widget>
    </div>
  </div>
)
export default ActivityWidgets
