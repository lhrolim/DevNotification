import {connect} from 'react-redux'
import {compose, branch, renderComponent, renderNothing} from 'recompose'
import Navbar2 from './Navbar2'

const layouts = ['top-navigation-1']

const Component = compose(
  connect(state => {
    return {
      navigation: state.navigation,
      layout: state.config.layout
    }
  }),
  branch(
    ({layout}) => layouts.includes(layout),
    renderComponent(Navbar2),
    renderNothing
  )
)(Navbar2)

export default Component
