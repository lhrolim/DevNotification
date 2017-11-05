import React from 'react'

const InputGroupWithIcon = ({field, validate}) => {
  let hasErrors = field.errors.length > 0 ? true : false
  return (
    <div className={hasErrors ? 'form-group has-danger' : 'form-group'}>
      <label className="form-control-label">{field.rules.title}</label>
      <div className="input-group">
        <span className="input-group-addon rounded-left">
          <i className={field.icon} />
        </span>
        <input
          placeholder={field.placeholder || ''}
          type={field.type}
          className={
            hasErrors
              ? 'form-control form-control-danger rounded-right'
              : 'form-control rounded-right'
          }
          name={field.name}
          onBlur={(e, field) => validate(e, field)}
        />
      </div>
      {field.errors.map((error, i) => (
        <div key={i} className="form-control-feedback">
          {error}
        </div>
      ))}
    </div>
  )
}
export default InputGroupWithIcon
