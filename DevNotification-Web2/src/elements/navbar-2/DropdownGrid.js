import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/elements/dropdown-grid.css'

const DropdownGrid = ({items}) => (
  <div className="navbar-dropdown dropdown-grid">
    <div className="dropdown-inner">
      <div className="dropdown-title">Applications</div>
      {items.map((item, i) => (
        <Link key={i} to="/" className="grid-item">
          <i className={`${item.icon} color-${item.color}`} />
          <div className="title">{item.title}</div>
        </Link>
      ))}
    </div>
  </div>
)

let items = [
  {icon: 'sli-home', color: 'success', title: 'Home'},
  {icon: 'sli-user', color: 'danger', title: 'My account'},
  {icon: 'sli-bubbles', color: 'warning', title: 'Comments'},
  {icon: 'sli-wrench', color: 'secondary', title: 'Settings'},
  {icon: 'sli-social-twitter', color: 'twitter', title: 'Twitter'},
  {icon: 'sli-social-facebook', color: 'facebook', title: 'Facebook'},
  {icon: 'sli-social-instagram', color: 'instagram', title: 'Instagram'},
  {icon: 'sli-social-pinterest', color: 'pinterest', title: 'Pinterest'},
  {icon: 'sli-social-google', color: 'google-plus', title: 'Google'}
]

const SampleDropdownGrid = () => <DropdownGrid items={items} />

export default SampleDropdownGrid
