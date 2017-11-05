import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import Dashboard from '../dashboards/geographic/Geographic'

const Demo6 = compose(
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
          logo: 'danger',
          leftSidebar: 'light'
        }
      })
    }
  })
)

export default Demo6(Dashboard)
