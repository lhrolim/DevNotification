import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import Dashboard from '../dashboards/geographic/Geographic'

const Demo3 = compose(
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
          layout: 'default-sidebar-1',
          navbar: 'primary',
          logo: 'primary',
          leftSidebar: 'light'
        }
      })
    }
  })
)

export default Demo3(Dashboard)
