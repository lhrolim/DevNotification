import React from 'react'
import PropTypes from 'prop-types'
import '../css/elements/widget.css'
const Widget = ({title, description, children}) => {
  return (
    <div className="widget">
      <div className="row">
        <div className="col">
          <div className="title">{title}</div>
          <div
            className="description"
            dangerouslySetInnerHTML={{__html: description}}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </div>
  )
}

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string
  ])
}

export default Widget
