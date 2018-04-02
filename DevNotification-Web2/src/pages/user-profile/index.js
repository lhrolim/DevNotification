import React, {Component} from 'react'
import UserProfileTop from './UserProfileTop'
import {connect} from 'react-redux'
import {setConfig} from '../../actions/config'

import Widget from '../../elements/Widget'
import AccountSettings from './AccountSettings'
import EmailPreferences from './EmailPreferences'
import SecuritySettings from './SecuritySettings'

import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import '../../css/pages/user-profile.css'

class Index extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: 0
    }
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <Widget
            title="User profile"
            description="Sample user profile with form input validation">
            <div className="row m-b-30">
              <div className="col">
                <UserProfileTop />
              </div>
            </div>
            <Nav tabs className="nav nav-tabs m-b-20">
              <NavItem>
                <NavLink
                  className={this.state.activeTab === 0 ? 'active' : ''}
                  onClick={() => {
                    this.toggle(0)
                  }}>
                  <span>Account settings</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={this.state.activeTab === 1 ? 'active' : ''}
                  onClick={() => {
                    this.toggle(1)
                  }}>
                  <span>Email preferences</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={this.state.activeTab === 2 ? 'active' : ''}
                  onClick={() => {
                    this.toggle(2)
                  }}>
                  <span>Security settings</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab.toString()}>
              <TabPane tabId="0">
                <AccountSettings />
              </TabPane>
              <TabPane tabId="1">
                <EmailPreferences />
              </TabPane>
              <TabPane tabId="2">
                <SecuritySettings />
              </TabPane>
            </TabContent>
          </Widget>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    setConfig: (key, value) => dispatch(setConfig(key, value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
