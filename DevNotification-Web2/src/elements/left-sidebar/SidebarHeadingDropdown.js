import React, {Component} from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import dropdown from '../../json/user-dropdown.json'
import '../../css/elements/sidebar-heading-dropdown.css'

class SidebarHeadingDropdown extends Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }
  toggle() {
    console.log('toggle')
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render() {
    return (
      <div className="sidebar-heading-dropdown">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className="btn btn-default btn-flat dropdown-toggle">
            <div className="name">Eric Simpson</div>
            <div className="location">
              <i className="sli-globe" />
              <span>Seattle, WA</span>
            </div>
          </DropdownToggle>
          <DropdownMenu className="animated bounceIn">
            {dropdown.map((item, i) => (
              <DropdownItem key={i}>
                <i className={item.icon} />
                <span className="title">{item.name}</span>
                <div className="separator" />
                {item.badge && (
                  <span className={item.badgeClass}>{item.badgeText}</span>
                )}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
export default SidebarHeadingDropdown
