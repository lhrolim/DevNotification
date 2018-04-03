import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

const Home = compose(
  connect(state => {
    return {
      config: state.config,
      auth: state.authState
    }
  }),
  lifecycle({
    componentDidMount() {
    /*   this.props.dispatch({
        type: 'SET_CONFIG',
        config: { layout: 'home' }
      }) */
    },

    componentDidUpdate() {
    }




  })
)

export default Home
