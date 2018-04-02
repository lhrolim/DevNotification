import React from 'react'
import {connect} from 'react-redux'
import {validateInput} from '../actions/pages'

const Textarea = ({field, validateInput}) => {
  let hasErrors = field.errors.length > 0 ? true : false
  return (
    <div className={hasErrors ? 'form-group text-danger' : 'form-group'}>
      <label className="form-control-label">{field.rules.title}</label>
      <textarea
        className={hasErrors ? 'form-control is-invalid' : 'form-control'}
        name={field.name}
        onBlur={e => validateInput(e, field)}
      />
      {field.errors.map((error, i) => (
        <div key={i} className="form-text text-danger">
          {error}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    validateInput: (e, field) => dispatch(validateInput(e, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Textarea)
