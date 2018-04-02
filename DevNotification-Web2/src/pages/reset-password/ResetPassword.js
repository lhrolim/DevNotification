import React from 'react'
import {connect} from 'react-redux'
import {validate, submit} from '../../actions/pages/index'
import {Link} from 'react-router-dom'
import Form from '../Form'
import InputGroup from '../InputGroup'

const ResetPassword = ({fields, submit}) => (
  <Form
    title="Reset password"
    description="Please enter your email address to reset your password">
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
    <div className="links">
      <p>
        <span className="m-r-5">Already have an account?</span>
        <Link to="/pages/login">Login</Link>
      </p>
      <p>
        <span className="m-r-5">New user?</span>
        <Link to="/pages/create-account">Create account</Link>
      </p>
    </div>
  </Form>
)

const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.resetPassword.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: fields => dispatch(submit(fields)),
    validate: (value, field) => dispatch(validate(value, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
