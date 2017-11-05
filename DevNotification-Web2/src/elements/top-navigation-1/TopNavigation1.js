import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/elements/top-navigation-1.css'

const Menu = ({navigation}) => (
  <ul className="list-unstyled">
    <li className="list-item">
      <a className="list-link">{navigation.title}</a>
      <ul className="list-unstyled d-flex flex-column">
        {navigation.items.map((item, i) => (
          <li className="list-item" key={i}>
            <Link to={item.url} className="list-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  </ul>
)

const TopNavigation1 = ({navigation}) => {
  const items = navigation
    .map(item => item.items)
    .reduce((a, b) => [...a, ...b])
  return (
    <div className="top-navigation top-navigation-1 d-flex flex-row justify-content-start align-items-center flex-nowrap">
      {items && items.map((item, i) => <Menu key={i} navigation={item} />)}
    </div>
  )
}

export default TopNavigation1
