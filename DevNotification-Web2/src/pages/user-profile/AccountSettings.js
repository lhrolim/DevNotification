import React, {Component} from 'react'
import {connect} from 'react-redux'
import {validate} from '../../actions/pages'

import InputGroup from '../InputGroup'
import Select from '../Select'

class AccountSettings extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e) {
    e.preventDefault()
    this.props.fields.map(field => this.props.validate(field.value, field))
    console.log('form is valid', this.props.valid)
    return false
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
          <div className="col col-xl-4">
            <InputGroup field={this.props.fields[3]} />
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-4">
            <Select field={this.props.fields[4]} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={this.submit}>
              Update account
            </button>
          </div>
        </div>
      </form>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    valid: state.accountSettings.valid,
    fields: state.accountSettings.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    validate: (value, field) => dispatch(validate(value, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings)
