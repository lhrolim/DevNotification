import {connect} from 'react-redux'
import {compose, branch, renderComponent, renderNothing} from 'recompose'
import LeftSidebar from './LeftSidebar'

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
    renderComponent(LeftSidebar),
    renderNothing
  )
)(LeftSidebar)

export default Component
