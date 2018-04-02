import {connect} from 'react-redux'
import {compose, branch, renderComponent, renderNothing} from 'recompose'
import Navbar1 from './Navbar1'

const layouts = ['default-sidebar-1', 'collapsed-sidebar-1']

const Component = compose(
  connect(state => {
    return {
      navigation: state.navigation,
      layout: state.config.layout
    }
  }),
  branch(
    ({layout}) => layouts.includes(layout),
    renderComponent(Navbar1),
    renderNothing
  )
)(Navbar1)

export default Component
