export function securitySettings(
  state = {
    valid: false,
    fields: [
      {
        name: 'currentPassword',
        icon: 'lock_outline',
        value: '',
        type: 'password',
        errors: [],
        rules: {
          title: 'Current password',
          required: true
        }
      },
      {
        name: 'newPassword',
        icon: 'lock_outline',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'New password',
          required: true
        }
      },
      {
        name: 'confirmNewPassword',
        icon: 'lock_outline',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Confirm new password',
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
    //case 'SUBMIT':
    default:
      return state
  }
}
