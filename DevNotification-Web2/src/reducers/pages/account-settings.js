export function accountSettings(
  state = {
    valid: false,
    fields: [
      {
        name: 'firstName',
        icon: 'account_circle',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'First name',
          required: true
        }
      },
      {
        name: 'lastName',
        icon: 'account_circle',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Last name',
          required: true
        }
      },
      {
        name: 'companyName',
        icon: 'map',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Company name',
          required: true
        }
      },
      {
        name: 'position',
        icon: 'star',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Position',
          required: true
        }
      },
      {
        name: 'language',
        icon: 'star',
        value: '',
        errors: [],
        rules: {
          title: 'Language',
          required: true
        },
        placeholder: 'Choose your language',
        options: ['English', 'French', 'Spanish', 'Portuguese']
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
