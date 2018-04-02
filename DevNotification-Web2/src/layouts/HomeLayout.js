import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import restService from '../devnotification/util/restservice'
import history from '../history';

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
