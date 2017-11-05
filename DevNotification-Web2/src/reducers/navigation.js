const urls = [
  {
    title: "Applications",
    items: [
      {
        url: '/dashboards/analytics',
        icon: '',
        title: 'My Projects',
        items: []
      },

      {
        url: '/dashboards/analytics',
        icon: '',
        title: 'Books',
        items: []
      },

      {
        url: '/dashboards/analytics',
        icon: '',
        title: 'Videos',
        items: []
      },
    ]
  }
]



export function navigation(state = Array.from(urls), action) {
  switch (action.type) {
    case 'SET_NAVIGATION':
      return Object.assign({}, state, {
        ...action.navigation
      })
    default:
      return state
  }
}
