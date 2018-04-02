import React from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import UserData from './UserData'
import '../css/user-widgets/user-widget-3.css'

const UserWidget3 = ({user, buttons}) => (
  <div className="user-widget-3 text-center">
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
            {buttons.map((button, i) => (
              <button
                key={i}
                type="button"
                className={`btn ${button.btnClass}`}>
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

UserWidget3.propTypes = {
  user: PropTypes.object.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default UserWidget3
