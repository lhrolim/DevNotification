import React from 'react'
import {connect} from 'react-redux'
import {validate, submit} from '../../actions/pages/index'
import Form from '../Form'
import InputGroup from '../InputGroup'
import {Link} from 'react-router-dom'

const CreateAccount = ({fields, submit}) => (
  <Form
    title="Create account"
    description="Please enter your email address and password to create an account">
    {fields[0] && <InputGroup field={fields[0]} />}
    {fields[1] && <InputGroup field={fields[1]} />}
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
    <p>Or use one of these social media services</p>
    <div className="row m-b-20">
      <div className="col">
        <button className="btn btn-lg btn-twitter btn-block btn-rounded btn-icon btn-outline">
          <i className="fa fa-twitter" />
          <span className="btn-text">Twitter</span>
        </button>
      </div>
      <div className="col col-xl-6">
        <button className="btn btn-lg btn-facebook btn-block btn-rounded btn-icon btn-outline">
          <i className="fa fa-facebook" />
          <span className="btn-text">Facebook</span>
        </button>
      </div>
    </div>
    <p>
      By creating an account you agree to the
      <Link to="/pages/terms-of-service">Terms of service</Link> and{' '}
      <Link to="/pages/privacy-policy">Privacy policy</Link>
    </p>
  </Form>
)

const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.createAccount.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: fields => dispatch(submit(fields)),
    validate: (value, field) => dispatch(validate(value, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
