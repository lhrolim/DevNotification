import React from 'react'
//import PropTypes from 'prop-types'
import '../css/user-widgets/user-image.css'
const UserImage = ({user}) => (
  <div className="user-image">
    <div className="row d-flex justify-content-center">
      <div className="col">
        <img className="rounded-circle" src={user.img} alt="" />
      </div>
    </div>
  </div>
)
export default UserImage
