import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import Dashboard from '../dashboards/e-commerce/ECommerce'

const Demo2 = compose(
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
          navbar: 'light',
          logo: 'light',
          topNavigation: 'dark'
        }
      })
    }
  })
)

export default Demo2(Dashboard)
