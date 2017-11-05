import React, {Component} from 'react'
class InputGroup extends Component {
  render() {
    let field = this.props.field
    let hasErrors = field.errors.length > 0 ? true : false
    return (
      <div className={hasErrors ? 'form-group has-danger' : 'form-group'}>
        <label className="form-control-label">{field.rules.title}</label>
        <input
          placeholder={field.placeholder || ''}
          type={field.type}
          className={
            hasErrors ? 'form-control form-control-danger' : 'form-control'
          }
          name={field.name}
          onBlur={(e, field) => this.props.validate(e, field)}
        />
        {field.errors.map((error, i) => (
          <div key={i} className="form-control-feedback">
            {error}
          </div>
        ))}
      </div>
    )
  }
}
export default InputGroup
