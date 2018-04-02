export function emailPreferences(
  state = {
    valid: false,
    fields: [
      {
        name: 'currentEmail',
        icon: 'mail_outline',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Current email',
          required: true,
          email: true
        }
      },
      {
        name: 'newEmail',
        icon: 'mail_outline',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'New email',
          required: true,
          email: true
        }
      }
    ]
  },
  action
) {
  switch (action.type) {
    case 'VALIDATE':
      let fields = state.fields.map(item => {
        if (item.name === action.field.name) {
          return action.field
        } else {
          return item
        }
      })
      let valid =
        fields.filter(field => field.errors.length > 0).length > 0
          ? false
          : true
      return Object.assign({}, state, {
        valid: valid,
        fields: Array.from(fields)
      })
    //case 'SUBMIT':
    default:
      return state
  }
}
