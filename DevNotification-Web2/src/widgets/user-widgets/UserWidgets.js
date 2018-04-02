import React from 'react'
import Widget from '../../elements/DashboardWidget'
import SampleUserWidget1 from '../../user-widgets/SampleUserWidget1'
import SampleUserWidget2 from '../../user-widgets/SampleUserWidget2'
import SampleUserWidget3 from '../../user-widgets/SampleUserWidget3'
import SampleUserWidget4 from '../../user-widgets/SampleUserWidget4'
import SampleUserWidget5 from '../../user-widgets/SampleUserWidget5'
import SampleUserWidget6 from '../../user-widgets/SampleUserWidget6'
import SampleUserWidget7 from '../../user-widgets/SampleUserWidget7'
import SampleUserWidget8 from '../../user-widgets/SampleUserWidget8'

const UserWidgets = () => (
  <div>
    <div className="row">
      <div className="col-12 col-lg-4">
        <Widget
          title="Simple user card"
          description="Use the <code>UserWidget1</code> component to show a simple user card">
          <SampleUserWidget1 />
        </Widget>
      </div>
      <div className="col-12 col-lg-4">
        <Widget
          title="User card with icon"
          description="Use the <code>UserWidget3</code> component to show a user card with a custom icon">
          <SampleUserWidget3 />
        </Widget>
      </div>
      <div className="col-12 col-lg-4">
        <Widget
          title="User card with icons and numbers"
          description="Use the <code>UserWidget4</code> component to show a user card with icons and numbers">
          <SampleUserWidget4 />
        </Widget>
      </div>
      <div className="col-12 col-lg-4">
        <Widget
          title="User card with text and numbers"
          description="Use the <code>UserWidget5</code> component to show a user card with text and numbers">
          <SampleUserWidget5 />
        </Widget>
      </div>
      <div className="col-12 col-lg-4">
        <Widget
          title="User card with buttons"
          description="Use the <code>UserWidget6</code> component to show a user card with buttons">
          <SampleUserWidget6 />
        </Widget>
      </div>
      <div className="col-12 col-lg-4">
        <Widget
          title="User card with background"
          description="Use the <code>UserWidget7</code> component to show a user card with a background">
          <SampleUserWidget7 />
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-6">
        <Widget
          title="User list"
          description="Use the <code>UserWidget2</code> component to show a 3 line list of users">
          <SampleUserWidget8 />
        </Widget>
      </div>
      <div className="col-12 col-lg-6">
        <Widget
          title="User list with badges"
          description="Use the <code>UserWidget2</code> component to show a list of users with badges">
          <SampleUserWidget2 />
        </Widget>
      </div>
    </div>
  </div>
)
export default UserWidgets
