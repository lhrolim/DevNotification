export function underMaintenance(
  state = {
    valid: false,
    fields: [
      {
        value: '',
        name: 'search',
        icon: 'search',
        type: 'text',
        errors: [],
        rules: {
          title: 'Search',
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
