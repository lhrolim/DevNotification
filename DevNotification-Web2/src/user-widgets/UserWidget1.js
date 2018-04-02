import React from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import UserData from './UserData'
import '../css/user-widgets/user-widget-1.css'

const UserWidget1 = ({user}) => (
  <div className="user-widget-1 text-center">
    <UserImage user={user} />
    <UserData
      title={user.name}
      subtitle={user.company}
      description={user.description}
      location={user.country}
    />
  </div>
)

UserWidget1.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserWidget1
