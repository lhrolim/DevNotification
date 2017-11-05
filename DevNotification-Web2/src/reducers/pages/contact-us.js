export function contactUs(
  state = {
    valid: false,
    fields: [
      {
        value: '',
        name: 'name',
        icon: 'account_circle',
        type: 'text',
        errors: [],
        rules: {
          title: 'Your name',
          required: true
        }
      },
      {
        value: '',
        name: 'email',
        icon: 'mail_outline',
        type: 'text',
        errors: [],
        rules: {
          title: 'Your email',
          required: true,
          email: true
        }
      },
      {
        value: '',
        name: 'message',
        errors: [],
        rules: {
          title: 'Message',
          required: true
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
    case 'SUBMIT':
      valid =
        action.fields.filter(field => field.errors.length > 0).length > 0
          ? false
          : true
      return Object.assign({}, state, {
        valid: valid,
        fields: Array.from(action.fields)
      })
    default:
      return state
  }
}
