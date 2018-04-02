import React from 'react'
import PropTypes from 'prop-types'
import '../css/activity-widgets/activity-widget-7.css'

const ActivityWidget7 = ({items}) => (
  <div className="activity-widget-7">
    {items.map((item, i) => {
      let style = {
        width: item.value + '%'
      }
      return (
        <div className="row m-b-20" key={i}>
          <div className="col">
            <p className="title">{item.title}</p>
            <p className="subtitle">{item.subtitle}</p>
            <div className="progress progress-sm">
              <div
                className={`progress-bar bg-${item.color}`}
                role="progressbar"
                style={style}
              />
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

ActivityWidget7.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ActivityWidget7
