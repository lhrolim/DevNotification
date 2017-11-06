import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import {initLogin} from '../../core/authentication/action'

const StoredLayout = compose(
  connect(state => {
    return {
      config: state.config
    }
  }),
  lifecycle({
    componentDidMount() {
      let layout = this.props.config.layout
      if (layout === 'home' || layout === 'empty-view-1') {
        layout = 'collapsed-sidebar-1'
      }
      this.props.dispatch(initLogin())
    }
  })
)

export default StoredLayout
