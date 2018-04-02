import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Menu extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    let items = this.props.items
    if (items.items.length === 0) {
      return (
        <li>
          <Link
            to={items.url}
            className="btn btn-default btn-flat btn-sidebar btn-sidebar-1">
            <i className="material-icons">{items.icon}</i>
            <span className="title">{items.title}</span>
            {items.badge && (
              <span className={`ml-auto ${items.badge.className}`}>
                {items.badge.title}
              </span>
            )}
          </Link>
        </li>
      )
    } else {
      return (
        <li>
          <a
            className={
              this.state.isOpen
                ? 'btn btn-default btn-flat btn-sidebar btn-sidebar-1 has-children is-open'
                : 'btn btn-default btn-flat btn-sidebar btn-sidebar-1 has-children'
            }
            onClick={this.toggle}>
            <i className="material-icons">{items.icon}</i>
            <span className="title">{items.title}</span>
            {items.badge && (
              <span className={`ml-auto ${items.badge.className}`}>
                {items.badge.title}
              </span>
            )}
          </a>
          <ul className="list-unstyled">
            {items.items.map((item, k) => (
              <li key={k}>
                <Link
                  to={item.url}
                  className="btn btn-default btn-flat btn-sidebar btn-sidebar-2">
                  <i className="material-icons">{item.icon}</i>
                  <span className="title">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )
    }
  }
}
export default Menu
