import React from 'react'
import {connect} from 'react-redux'
import {validateSelect} from '../actions/pages'

const Select = ({field, validateSelect}) => {
  let hasErrors = field.errors.length > 0 ? true : false
  return (
    <div className={hasErrors ? 'form-group text-danger' : 'form-group'}>
      <label className="form-control-label">{field.rules.title}</label>
      <select
        className={hasErrors ? 'form-control is-invalid' : 'form-control'}
        name={field.name}
        onChange={e => validateSelect(e, field)}>
        <option value="">{field.placeholder}</option>
        {field.options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
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
    validateSelect: (e, field) => dispatch(validateSelect(e, field))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Select)
