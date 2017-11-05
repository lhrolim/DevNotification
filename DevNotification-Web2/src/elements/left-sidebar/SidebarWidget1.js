import React from 'react'
import PropTypes from 'prop-types'
import {random} from '../../functions'
import '../../css/elements/sidebar-widget-1.css'

const SidebarWidget1 = ({title, items}) => (
  <div className="section sidebar-widget-1">
    <div className="section-title">{title}</div>
    <div className="project-status">
      {items.map((item, i) => {
        let style = {width: item.value + '%'}
        return (
          <div className="row" key={i}>
            <div className="col">
              <div className="row justify-content-between m-b-0">
                <div className="col-9">
                  <p>{item.title}</p>
                </div>
                <div className={`col-3 text-right color-${item.color}`}>
                  <span>{item.value}%</span>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col">
                  <div className="progress progress-sm">
                    <div
                      className={`progress-bar bg-${item.color}`}
                      style={style}
                      value={`${item.value}`}
                      role="progressbar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

SidebarWidget1.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

const items = [
  {
    title: 'Product development',
    color: 'success',
    value: random(50, 90)
  },
  {
    title: 'Github project',
    color: 'warning',
    value: random(50, 90)
  },
  {
    title: 'Upload demo',
    color: 'danger',
    value: random(50, 90)
  }
]

SidebarWidget1.defaultProps = {
  title: 'Active projects',
  items: items
}

export default SidebarWidget1
