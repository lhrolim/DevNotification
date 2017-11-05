import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleTextWidget1 from '../../text-widgets/SampleTextWidget1'
import SampleTextWidget9 from '../../text-widgets/SampleTextWidget9'
import SampleTextWidget10 from '../../text-widgets/SampleTextWidget10'

const TextWidgets = () => (
  <div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Text with numbers on top"
          description="Use the <code>TextWidget1</code> component to show text with numbers on top and text with percents">
          <SampleTextWidget1 />
        </Widget>
      </div>
    </div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Text with numbers on top"
          description="Use the <code>TextWidget9</code> component to show text with numbers on top">
          <SampleTextWidget9 />
        </Widget>
      </div>
    </div>
    <div className="row m-b-10">
      <div className="col">
        <Widget
          title="Text with numbers below"
          description="Use the <code>TextWidget10</code> component to show text with numbers below">
          <SampleTextWidget10 />
        </Widget>
      </div>
    </div>
  </div>
)
export default TextWidgets
