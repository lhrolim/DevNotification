import React from 'react'
import Logo from '../logo'
import Search from './Search'
import ToggleLayout1 from './ToggleLayout1'
import ToggleLayout2 from './ToggleLayout2'
import ToggleRightSidebar from './ToggleRightSidebar'
import DropdownGrid from './DropdownGrid'
import DropdownTasks from './DropdownTasks'
import DropdownMessages from './DropdownMessages'
import DropdownUser from './DropdownUser'
import DropdownFlags from './DropdownFlags'
import '../../css/elements/navbar-1.css'
import {connect} from 'react-redux'

const Navbar1 = (props) => (
  <nav className="navbar navbar-1 d-flex justify-content-around align-items-center flex-nowrap">
    <Logo />
    <ToggleLayout1 />
    <ul className="nav nav-inline nav-inline-1">
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link">
          <i className="material-icons">fullscreen</i>
        </a>
        <DropdownGrid />
      </li>
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link">
          <i className="material-icons">rss_feed</i>
        </a>
        <DropdownTasks />
      </li>
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link nav-link-badge">
          <i className="material-icons">notifications_none</i>
          <span className="badge badge-sm badge-rounded badge-danger">3</span>
        </a>
        <DropdownMessages />
      </li>
    </ul>
    <div className="separator" />
    <Search />
    <div style={{paddingBottom:'20px'}}>
    <ul className="nav nav-inline nav-inline-2">
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link nav-link-avatar">
          <span className="badge badge-sm badge-rounded badge-warning">1</span>
          <img
            src= {props.avatar}
            className="rounded-circle"
            alt="avatar"
          />
        </a>
        <DropdownUser />
      </li>
    </ul>
    </div>
  </nav>
)

const mapStateToProps = (state, ownProps) => {
  return {
    avatar: state.user.authProfile.picture
  }
}

export default connect(mapStateToProps)(Navbar1)
