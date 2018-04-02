import React from 'react'
import {connect} from 'react-redux'
import {validate, submit} from '../../actions/pages/index'
import InputGroup from '../InputGroup'
import Textarea from '../Textarea'
import Form from '../Form'

const ContactUs = ({fields, submit}) => (
  <Form
    title="Contact us"
    description="Feel free to contact us. Send us a message and we'll get back to you as soon as possible">
    {fields[0] && <InputGroup field={fields[0]} />}
    {fields[1] && <InputGroup field={fields[1]} />}
    {fields[2] && <Textarea field={fields[2]} />}
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
    fields: state.contactUs.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: fields => dispatch(submit(fields)),
    validate: (value, field) => dispatch(validate(value, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
