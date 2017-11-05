import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'

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
        layout = 'default-sidebar-1'
      }
      this.props.dispatch({
        type: 'SET_CONFIG',
        config: {layout: layout}
      })
    }
  })
)

export default StoredLayout
