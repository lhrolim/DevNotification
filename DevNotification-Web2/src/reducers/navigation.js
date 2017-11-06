const urls = [
  {
    title: "Applications",
    items: [
      {
        url: '/dashboards/analytics',
        icon: 'home',
        title: 'Home',
        items: []
      },

      {
        url: '/dashboards/analytics',
        icon: 'trending_up',
        title: 'Trending',
        items: []
      },

      {
        url: '/dashboards/analytics',
        icon: 'featured_video',
        title: 'Videos',
        items: []
      },

      {
        url: '/dashboards/analytics',
        icon: 'library_books',
        title: 'Courses',
        items: []
      },

    
    ]
  },

  {
    title: "My Projects",
    items:[]
  },
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
