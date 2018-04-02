import React from 'react'
import Menu from './Menu'
import '../../css/elements/left-sidebar-1.css'

const LeftSidebar = ({navigation}) => {
  return (
    <div>
      <div className="left-sidebar-placeholder" />
      <div className="left-sidebar left-sidebar-1">
        <div className="wrapper">
          <div className="content">
            {navigation.map((menu, i) => (
              <div key={i} className="section">
                <div className="section-title">{menu.title}</div>
                <ul className="list-unstyled">
                  {menu.items.map((items, i) => <Menu key={i} items={items} />)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
