import React from 'react'
import Widget from '../../elements/DashboardWidget'
import TimelineWidget1 from '../../timeline-widgets/TimelineWidget1'
import timeline from '../../json/timeline.json'

const Section4 = () => (
  <Widget title="Timeline" description="Latest news from your users">
    <TimelineWidget1 items={timeline} />
  </Widget>
)
export default Section4
