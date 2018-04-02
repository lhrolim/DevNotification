import React, {Component} from 'react'
import {connect} from 'react-redux'
import {validate} from '../../actions/pages'

import InputGroup from '../InputGroup'

class SecuritySettings extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: 0
    }
  }
  submit(e) {
    e.preventDefault()
    this.props.fields.map(field => this.props.validate(field.value, field))
    console.log('form is valid', this.props.valid)
    return false
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <div className="row">
          <div className="col col-xl-4">
            <InputGroup field={this.props.fields[0]} />
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-4">
            <InputGroup field={this.props.fields[1]} />
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-4">
            <InputGroup field={this.props.fields[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={this.submit}>
              Update security settings
            </button>
          </div>
        </div>
      </form>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    valid: state.securitySettings.valid,
    fields: state.securitySettings.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    validate: (value, field) => dispatch(validate(value, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SecuritySettings)
