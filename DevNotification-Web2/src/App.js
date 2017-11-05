import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import history from './history'
import NotificationsSystem from 'reapop'
import theme from './notifications/reapop/reapop-theme-bootstrap'

//global css
import './css/bootstrap/bootstrap.css'
import './css/main.css'

//structural elements
import LeftSidebar from './elements/left-sidebar'
import RightSidebar from './elements/right-sidebar'
import Navbar1 from './elements/navbar-1'
import Navbar2 from './elements/navbar-2'
import TopNavigation1 from './elements/top-navigation-1'
import Jumbotron from './elements/jumbotron'
import Backdrops from './elements/backdrops'

import Routes from './Routes'

class App extends Component {
  render() {
    let {
      layout,
      background,
      navbar,
      topNavigation,
      logo,
      leftSidebar,
      collapsed
    } = this.props.config
    let isEmptyView = layout === 'empty-view-1' ? true : false
    return (
      <ConnectedRouter history={history}>
        <div
          data-layout={layout}
          data-background={background}
          data-navbar={navbar}
          data-top-navigation={topNavigation}
          data-logo={logo}
          data-left-sidebar={leftSidebar}
          data-collapsed={collapsed}>
          <NotificationsSystem theme={theme} />
          <Backdrops />
          <RightSidebar />
          <Navbar1 />
          <Navbar2 />
          <TopNavigation1 />
          <div className={isEmptyView ? '' : 'container-fluid'}>
            <div className={isEmptyView ? '' : 'row'}>
              <LeftSidebar />
              <div className="col main">
                <Jumbotron />
                <Routes />
              </div>
            </div>
          </div>
        </div>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config
  }
}
export default connect(mapStateToProps)(App)
