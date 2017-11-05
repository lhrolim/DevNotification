import React, {Component} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
class RoundedPills extends Component {
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
      <div>
        <Nav tabs className="nav-pills nav-pills-rounded">
          <NavItem>
            <NavLink
              className={this.state.activeTab === 0 ? 'active' : ''}
              onClick={() => this.toggle(0)}>
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === 1 ? 'active' : ''}
              onClick={() => this.toggle(1)}>
              Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === 2 ? 'active' : ''}
              onClick={() => this.toggle(2)}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="disabled">Disabled</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab.toString()}>
          <TabPane tabId="0">{this.props.texts[0]}</TabPane>
          <TabPane tabId="1">{this.props.texts[1]}</TabPane>
          <TabPane tabId="2">{this.props.texts[2]}</TabPane>
        </TabContent>
      </div>
    )
  }
}
export default RoundedPills
