import React from 'react'
import '../../css/elements/dropdown-user.css'

const DropdownUser = ({items}) => (
  <div className="navbar-dropdown dropdown-user">
    <div className="dropdown-title">My account</div>
    {items.map((item, i) => (
      <div className="dropdown-item" key={i}>
        <i className={item.icon} />
        <span className="title">{item.name}</span>
        <div className="separator" />
        {item.badge && (
          <span className={item.badgeClass}>{item.badgeText}</span>
        )}
      </div>
    ))}
  </div>
)

let items = [
  {
    icon: 'sli-envelope',
    iconColor: 'default',
    name: 'Inbox',
    badge: true,
    badgeText: 'New',
    badgeClass: 'badge badge-pill badge-raised badge-danger badge-sm'
  },
  {
    icon: 'sli-star',
    iconColor: 'default',
    name: 'Messages',
    badge: true,
    badgeText: '5',
    badgeClass: 'badge badge-info badge-rounded badge-sm'
  },
  {
    icon: 'sli-settings',
    iconColor: 'default',
    name: 'Profile',
    badge: false,
    badgeText: false,
    badgeClass: false
  },
  {
    icon: 'sli-clock',
    iconColor: 'default',
    name: 'Lock screen',
    badge: false,
    badgeText: false,
    badgeClass: false
  },
  {
    icon: 'sli-power',
    iconColor: 'default',
    name: 'Logout',
    badge: false,
    badgeText: false,
    badgeClass: false
  }
]

const SampleDropdownUser = () => <DropdownUser items={items} />

export default SampleDropdownUser
