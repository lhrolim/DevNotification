import React from 'react'
import Logo from '../logo'
import Search from './Search'
import ToggleRightSidebar from './ToggleRightSidebar'
import DropdownUser from './DropdownUser'
import DropdownFlags from './DropdownFlags'
import '../../css/elements/navbar-2.css'

const Navbar2 = () => (
  <nav className="navbar navbar-2 d-flex justify-content-around align-items-center flex-nowrap">
    <Logo />
    <Search />
    <div className="separator" />
    <ul className="nav nav-inline nav-inline-2">
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link nav-link-avatar">
          <span className="badge badge-sm badge-rounded badge-warning">1</span>
          <img
            src="/assets/faces/m7.png"
            className="rounded-circle"
            alt="avatar"
          />
        </a>
        <DropdownUser />
      </li>
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link">
          <span className="flag flag-icon-background flag-icon flag-icon-gb" />
        </a>
        <DropdownFlags />
      </li>
      <ToggleRightSidebar />
    </ul>
  </nav>
)

export default Navbar2
