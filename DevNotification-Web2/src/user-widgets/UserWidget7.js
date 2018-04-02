import React from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import UserData from './UserData'
import '../css/user-widgets/user-widget-7.css'

const UserWidget7 = ({user}) => (
  <div className="user-widget-7 text-center">
    <div className="user-widget-bg" />
    <UserImage user={user} />
    <UserData
      title={user.name}
      subtitle={user.company}
      description={user.description}
      location={user.country}
    />
  </div>
)

UserWidget7.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserWidget7
