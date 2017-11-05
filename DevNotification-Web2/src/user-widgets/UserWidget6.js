import React from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import UserData from './UserData'
import '../css/user-widgets/user-widget-6.css'

const UserWidget6 = ({user, icons}) => (
  <div className="user-widget-6 text-center">
    <UserImage user={user} />
    <UserData
      title={user.name}
      subtitle={user.company}
      description={user.description}
      location={user.country}
    />
    <div className="row text-center buttons">
      <div className="col">
        <div className="row d-flex justify-content-center">
          <div className="col">
            {icons.map((icon, i) => (
              <button
                key={i}
                type="button"
                className={`btn btn-${icon} btn-circle btn-xs`}>
                <i className={`fa fa-${icon}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

UserWidget6.propTypes = {
  user: PropTypes.object.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default UserWidget6
