import React, {Component} from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
class AnimatedDropdown extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render() {
    return (
      <div>
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          className={`dropdown-${this.props.size}`}>
          <DropdownToggle
            caret
            className={this.props.buttonType}
            color={this.props.color}>
            {this.props.title}
          </DropdownToggle>
          <DropdownMenu className={`animated ${this.props.animation}`}>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Other Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
export default AnimatedDropdown
