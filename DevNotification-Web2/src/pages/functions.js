import approve from 'approvejs'

export function validateField(e, field, fields) {
  e.preventDefault()
  field.value = ''
  let result = approve.value(e.target.value, field.rules)
  field.errors = []
  if (result.errors.length > 0) {
    field.errors = Array.from(result.errors)
    field.value = ''
  } else {
    field.value = e.target.value
  }
  fields = fields.map(item => {
    if (item.name === field.name) {
      return field
    } else {
      return item
    }
  })
  return fields
}

export function submitForm(e, fields) {
  e.preventDefault()
  fields = fields.map(field => {
    field.errors = []
    let result = approve.value(field.value, field.rules)
    if (result.errors.length > 0) {
      field.errors = Array.from(result.errors)
    }
    return field
  })
  return fields
}
