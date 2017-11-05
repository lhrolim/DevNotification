export function config(
  state = {
    layout: 'default-sidebar-1',
    background: 'light',
    navbar: 'light',
    topNavigation: 'light',
    logo: 'dark',
    leftSidebar: 'light',
    leftSidebarIcons: 'dark',
    rightSidebar: false,
    collapsed: false
  },
  action
) {
  switch (action.type) {
    case 'SET_CONFIG':
      return Object.assign({}, state, {
        ...action.config
      })
    default:
      return state
  }
}
