import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import Dashboard from '../dashboards/analytics/Analytics'

const Demo4 = compose(
  connect(state => {
    return {
      config: state.config
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.dispatch({
        type: 'SET_CONFIG',
        config: {
          layout: 'collapsed-sidebar-1',
          navbar: 'light',
          logo: 'info',
          leftSidebar: 'dark'
        }
      })
    }
  })
)

export default Demo4(Dashboard)
