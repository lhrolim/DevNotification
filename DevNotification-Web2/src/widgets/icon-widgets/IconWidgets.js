import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleIconWidget1 from '../../icon-widgets/SampleIconWidget1'
import SampleIconWidget2 from '../../icon-widgets/SampleIconWidget2'
import SampleIconWidget3 from '../../icon-widgets/SampleIconWidget3'
import SampleIconWidget4 from '../../icon-widgets/SampleIconWidget4'
import SampleIconWidget5 from '../../icon-widgets/SampleIconWidget5'
import SampleIconWidget6 from '../../icon-widgets/SampleIconWidget6'

const IconWidgets = () => (
  <div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Text with left aligned icon"
          description="Use the <code>IconWidget5</code> component to show text with left aligned icons">
          <SampleIconWidget5 />
        </Widget>
      </div>
    </div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Text with right aligned icon"
          description="Use the <code>IconWidget6</code> component to show text with right aligned icons">
          <SampleIconWidget6 />
        </Widget>
      </div>
    </div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Left aligned icons and number"
          description="Use the <code>IconWidget1</code> component to show left aligned icons and numbers">
          <SampleIconWidget1 />
        </Widget>
      </div>
    </div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Right aligned icons and number"
          description="Use the <code>IconWidget2</code> component to show right aligned icons and numbers">
          <SampleIconWidget2 />
        </Widget>
      </div>
    </div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Icons and number"
          description="Use the <code>IconWidget3</code> component to show icons on top of numbers">
          <SampleIconWidget3 />
        </Widget>
      </div>
    </div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Icons and number"
          description="Use the <code>IconWidget4</code> component to show icons below numbers">
          <SampleIconWidget4 />
        </Widget>
      </div>
    </div>
  </div>
)
export default IconWidgets
