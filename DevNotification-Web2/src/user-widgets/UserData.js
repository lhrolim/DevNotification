import React from 'react'
//import PropTypes from 'prop-types'
import '../css/user-widgets/user-data.css'
const UserData = ({title, subtitle, description, location}) => (
  <div className="user-data text-center">
    <div className="row">
      <div className="col">
        <h5 className="title">{title}</h5>
        <p className="subtitle">{subtitle}</p>
        <p className="description">{description}</p>
        <p className="location hidden">
          <i className="sli-globe" />
          <span>{location}</span>
        </p>
      </div>
    </div>
  </div>
)
export default UserData
