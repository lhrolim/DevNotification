import React from 'react'

const InputGroup = ({field, validate}) => {
  let hasErrors = field.errors.length > 0 ? true : false
  return (
    <div className={hasErrors ? 'form-group text-danger' : 'form-group'}>
      <label className="form-control-label">{field.rules.title}</label>
      <input
        placeholder={field.placeholder || ''}
        type={field.type}
        className={hasErrors ? 'form-control is-invalid' : 'form-control'}
        name={field.name}
        onBlur={(e, field) => validate(e, field)}
      />
      {field.errors.map((error, i) => (
        <div key={i} className="form-text text-danger">
          {error}
        </div>
      ))}
    </div>
  )
}

export default InputGroup
