import approve from 'approvejs'

export function validateField(field) {
  let result = approve.value(field.value, field.rules)
  if (result.errors && result.errors.length > 0) {
    field = Object.assign({}, field, {
      errors: Array.from(result.errors),
      value: ''
    })
  } else {
    field = Object.assign({}, field, {
      errors: []
    })
  }
  return field
}

export function validate(field) {
  field = validateField(field)
  return {
    type: 'VALIDATE',
    field
  }
}

export function submit(fields) {
  fields = fields.map(field => validateField(field))
  return {
    type: 'SUBMIT',
    fields
  }
}
