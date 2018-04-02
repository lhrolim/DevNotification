import approve from 'approvejs'

export function validateSelect(e, field) {
  return validate(e.target.value, field)
}

export function validateInput(e, field) {
  return validate(e.target.value, field)
}

export function setFormState(formState) {
  return {
    type: 'SET_FORM_STATE',
    formState
  }
}

export function validate(value, field) {
  let result = approve.value(value, field.rules)
  if (result.errors && result.errors.length > 0) {
    field = Object.assign({}, field, {
      errors: Array.from(result.errors),
      value: ''
    })
  } else {
    field = Object.assign({}, field, {
      errors: [],
      value: value
    })
  }
  return {
    type: 'VALIDATE',
    field
  }
}

/*
export function submit(fields) {
	
}
*/
