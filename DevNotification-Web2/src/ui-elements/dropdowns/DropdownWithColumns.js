import React, {Component} from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
class DropdownWithColumns extends Component {
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
          <DropdownMenu
            className={`dropdown-menu-cols dropdown-cols-${this.props.cols ||
              1}`}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Other Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Other Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Other Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Other Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
export default DropdownWithColumns
