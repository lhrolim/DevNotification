import {connect} from 'react-redux'
import {compose, branch, renderComponent, renderNothing} from 'recompose'
import TopNavigation1 from './TopNavigation1'

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
    renderComponent(TopNavigation1),
    renderNothing
  )
)(TopNavigation1)

export default Component
