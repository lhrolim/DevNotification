import React from 'react'
import PropTypes from 'prop-types'
import '../../css/elements/sidebar-widget-2.css'

const SidebarWidget2 = ({title, items}) => (
  <div className="section sidebar-widget-2">
    <div className="section-title">{title}</div>
    <ul className="list-group list-group-lg not-striped unbordered tags">
      {items.map((tag, i) => (
        <li className="list-group-item" key={i}>
          <div className="row">
            <div className="col flex-40">
              <i className={`fa fa-circle color-${tag.color}`} />
            </div>
            <div className="col">
              <p className="list-group-item-text">{tag.title}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

SidebarWidget2.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

const items = [
  {
    title: 'Documents',
    color: 'primary'
  },
  {
    title: 'Work',
    color: 'secondary'
  },
  {
    title: 'Clients',
    color: 'info'
  },
  {
    title: 'Projects',
    color: 'success'
  }
]

SidebarWidget2.defaultProps = {
  title: 'Tags',
  items: items
}

export default SidebarWidget2
