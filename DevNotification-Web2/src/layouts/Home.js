import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'

const Home = compose(
  connect(state => {
    return {
      config: state.config
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.dispatch({
        type: 'SET_CONFIG',
        config: {layout: 'home'}
      })
    }
  })
)

export default Home
