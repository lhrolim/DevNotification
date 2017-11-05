import React from 'react'
import {connect} from 'react-redux'
import {startCase} from 'lodash'
import Alert from './Alert'
import Widget from '../../elements/Widget'

const Alerts = ({colors}) => (
  <div className="row">
    {Object.keys(colors).map((color, i) => (
      <div className="col-12" key={i}>
        <Widget
          title={`${startCase(color)} color alerts`}
          description={`Use the <code>Alert</code> component with the <code>.alert-${color}</code> className for ${color} color alerts. Add the <code>.alert-outline</code> for outlined alerts and the <code>.alert-bordered</code> for bordered alerts`}>
          <div className="row">
            <div className="col">
              <Alert className={`alert alert-${color}`}>
                <strong>Stop!</strong> I am a {color} alert
              </Alert>
              <Alert className={`alert alert-${color} alert-outline`}>
                <strong>Stop!</strong> I am a {color} alert
              </Alert>
              <Alert className={`alert alert-${color} alert-bordered`}>
                <strong>Stop!</strong> I am a {color} alert
              </Alert>
            </div>
          </div>
        </Widget>
      </div>
    ))}
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(Alerts)
