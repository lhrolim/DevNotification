import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {compose, branch, renderComponent, renderNothing} from 'recompose'
import {startCase} from 'lodash'
import Jumbotron1 from './Jumbotron1'

const layouts = ['default-sidebar-1', 'collapsed-sidebar-1', 'top-navigation-1']

const Component = compose(
  withRouter,
  connect(state => {
    let pathname = state.router.location.pathname
    let parts =
      pathname && pathname.split('/').filter(str => str.trim().length > 0)
    let controller =
      parts && parts[0] ? startCase(parts[0]).replace(/Ui /g, 'UI ') : 'Welcome'
    let view = parts && parts[1] ? startCase(parts[1]) : 'Hello, Eric Simpson!'
    return {
      layout: state.config.layout,
      controller: controller,
      view: view
    }
  }),
  branch(
    ({layout, controller}) => {
      if (
        controller === 'Dashboards' ||
        controller === 'Demos' ||
        controller === 'Layouts'
      ) {
        return false
      }
      if (layouts.includes(layout)) return true
      return false
    },
    renderComponent(Jumbotron1),
    renderNothing
  )
)(Jumbotron1)

export default Component
