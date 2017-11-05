import React from 'react'
import {connect} from 'react-redux'
import {validate, submit} from '../../actions/pages/index'
import InputGroup from '../InputGroup'
import Form from '../Form'

const UnlockAccount = ({fields, submit}) => (
  <Form
    title="Unlock account"
    description="Please enter your password to unlock your account">
    <div className="text-center">
      <img
        src="/assets/faces/m7.png"
        className="rounded-circle img-fluid unlock-account-img"
        alt=""
      />
    </div>
    {fields[0] && <InputGroup field={fields[0]} />}
    {fields &&
      submit && (
        <div className="form-group">
          <button
            className="btn btn-primary btn-rounded btn-outline"
            type="submit"
            onClick={() => submit(fields)}>
            Submit
          </button>
        </div>
      )}
  </Form>
)

const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.unlockAccount.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: fields => dispatch(submit(fields)),
    validate: (value, field) => dispatch(validate(value, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UnlockAccount)
