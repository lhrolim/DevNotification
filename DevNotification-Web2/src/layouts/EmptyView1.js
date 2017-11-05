import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'

const EmptyView1 = compose(
  connect(state => {
    return {
      config: state.config
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.dispatch({
        type: 'SET_CONFIG',
        config: {layout: 'empty-view-1'}
      })
    }
  })
)

export default EmptyView1
