import React from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import UserData from './UserData'
import IconWidget10 from '../icon-widgets/IconWidget10'
import '../css/user-widgets/user-widget-4.css'

const UserWidget4 = ({user, icons}) => (
  <div className="user-widget-4 text-center">
    <UserImage user={user} />
    <UserData
      title={user.name}
      subtitle={user.company}
      description={user.description}
      location={user.country}
    />
    <div className="row text-center icons">
      {icons.map((widget, i) => (
        <div className="col col-lg-4" key={i}>
          <IconWidget10 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

UserWidget4.propTypes = {
  user: PropTypes.object.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default UserWidget4
