import React from 'react'
import '../../css/elements/dropdown-messages.css'

const DropdownMessages = ({notifications}) => (
  <div className="navbar-dropdown dropdown-messages">
    <div className="dropdown-inner">
      <div className="dropdown-title">5 pending notifications</div>
      {notifications.map((notification, i) => (
        <div className="dropdown-item" key={i}>
          <p>
            <span className="date">{notification.date}</span>
          </p>
          <p>
            <span
              className={`badge badge-sm badge-outline badge-${notification.badge}`}>
              {notification.type}
            </span>
            <span className="separator" />
            <span className="title">{notification.title}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
)

let notifications = [
  {
    badge: 'success',
    type: 'sale',
    title: 'Michael Smith upgraded to the $50 plan',
    date: '4 minutes ago'
  },
  {
    badge: 'danger',
    type: 'return',
    title: 'Lucas Johnson cancelled the $50 plan',
    date: '34 minutes ago'
  },
  {
    badge: 'warning',
    type: 'refund',
    title: 'Jane Smith is asking for a refund',
    date: '2 hours ago'
  },
  {
    badge: 'success',
    type: 'sale',
    title: 'George Lucas upgraded to the $25 plan',
    date: '3 hours ago'
  },
  {
    badge: 'primary',
    type: 'new',
    title: 'Andrew Peters is looking for a new plan',
    date: '4 hours ago'
  }
]

const SampleDropdownMessages = () => (
  <DropdownMessages notifications={notifications} />
)

export default SampleDropdownMessages
