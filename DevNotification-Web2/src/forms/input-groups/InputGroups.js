import React from 'react'
import Widget from '../../elements/Widget'
import LeftAlignedInputGroups from './LeftAlignedInputGroups'
import RightAlignedInputGroups from './RightAlignedInputGroups'
import CombinedInputGroups from './CombinedInputGroups'
//import '../../css/forms/input-groups.css'

const InputGroups = () => (
  <div>
    <div className="row">
      <div className="col-12 col-lg-6">
        <Widget
          title="Left aligned input groups"
          description="Use text, icons or buttons inside the <code>.input-group</code> for left aligned input groups">
          <LeftAlignedInputGroups />
        </Widget>
      </div>
      <div className="col-12 col-lg-6">
        <Widget
          title="Right aligned input groups"
          description="Use text, icons or buttons inside the <code>.input-group</code> for right aligned input groups">
          <RightAlignedInputGroups />
        </Widget>
      </div>
      <div className="col-12 col-lg-6">
        <Widget
          title="Combined input groups"
          description="Use text, icons or buttons inside the <code>.input-group</code> for left and right aligned input groups">
          <CombinedInputGroups />
        </Widget>
      </div>
    </div>
  </div>
)
export default InputGroups
