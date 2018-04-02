import React, {Component} from 'react'
class Select extends Component {
  render() {
    let field = this.props.field
    let hasErrors = field.errors.length > 0 ? true : false
    return (
      <div className={hasErrors ? 'form-group has-danger' : 'form-group'}>
        <label className="form-control-label">{field.rules.title}</label>
        <select
          className={
            hasErrors ? 'form-control form-control-danger' : 'form-control'
          }
          name={field.name}
          onChange={(e, field) => this.props.validate(e, field)}>
          <option value="">{field.placeholder}</option>
          {field.options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        {field.errors.map((error, i) => (
          <div key={i} className="form-control-feedback">
            {error}
          </div>
        ))}
      </div>
    )
  }
}
export default Select
