import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import Dashboard from '../dashboards/e-commerce/ECommerce'

const Demo5 = compose(
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
          navbar: 'primary',
          logo: 'primary',
          topNavigation: 'primary'
        }
      })
    }
  })
)

export default Demo5(Dashboard)
