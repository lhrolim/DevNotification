import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleTimelineWidget1 from '../../timeline-widgets/SampleTimelineWidget1'
import SampleTimelineWidget2 from '../../timeline-widgets/SampleTimelineWidget2'
import SampleTimelineWidget3 from '../../timeline-widgets/SampleTimelineWidget3'

const SampleTimelineWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-lg-6">
        <Widget
          title="Left timeline"
          description="Use the <code>TimelineWidget1</code> component for left aligned timeline widgets">
          <SampleTimelineWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-lg-6">
        <Widget
          title="Right timeline"
          description="Use the <code>TimelineWidget3</code> component for left aligned timeline widgets">
          <SampleTimelineWidget3 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Center timeline"
          description="Use the <code>TimelineWidget2</code> component for left aligned timeline widgets">
          <SampleTimelineWidget2 />
        </Widget>
      </div>
    </div>
  </div>
)
export default SampleTimelineWidgets
