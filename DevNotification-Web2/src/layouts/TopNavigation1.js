import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import Dashboard from '../dashboards/analytics/Analytics'

const TopNavigation1 = compose(
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
          layout: 'top-navigation-1',
          navbar: 'dark',
          logo: 'dark',
          topNavigation: 'light'
        }
      })
    }
  })
)

export default TopNavigation1(Dashboard)
