import React from 'react'
import {connect} from 'react-redux'
import {validate, submit} from '../../actions/pages/index'
import Form from '../Form'
import InputGroup from '../InputGroup'

const Subscribe = ({fields, submit}) => (
  <Form
    title="Subscribe"
    description="Subscribe to our newsletter to receive weekly updates">
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
    fields: state.subscribe.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: fields => dispatch(submit(fields)),
    validate: (value, field) => dispatch(validate(value, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Subscribe)
