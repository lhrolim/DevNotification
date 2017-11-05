import React from 'react'
import {connect} from 'react-redux'
import {validateInput} from '../actions/pages'

const InputGroup = ({field, validateInput}) => {
  let hasErrors = field.errors.length > 0 ? true : false
  return (
    <div className={hasErrors ? 'form-group text-danger' : 'form-group'}>
      <label className="form-control-label">{field.rules.title}</label>
      <div className="input-group">
        <span className="input-group-addon rounded-left">
          <i
            className={
              hasErrors ? 'material-icons text-danger' : 'material-icons'
            }>
            {field.icon}
          </i>
        </span>
        <input
          placeholder={field.placeholder || ''}
          type={field.type}
          className={
            hasErrors
              ? 'form-control is-invalid rounded-right'
              : 'form-control rounded-right'
          }
          name={field.name}
          onBlur={e => validateInput(e, field)}
        />
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(InputGroup)
