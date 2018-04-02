import React from 'react'
import PropTypes from 'prop-types'
import UserImage from './UserImage'
import UserData from './UserData'
import TextWidget9 from '../text-widgets/TextWidget9'
import '../css/user-widgets/user-widget-5.css'

const UserWidget5 = ({user, statistics}) => (
  <div className="user-widget-5 text-center">
    <UserImage user={user} />
    <UserData
      title={user.name}
      subtitle={user.company}
      description={user.description}
      location={user.country}
    />
    <div className="row text-center text-blocks">
      {statistics.map((widget, i) => (
        <div className="col col-lg-6" key={i}>
          <TextWidget9 {...widget} />
        </div>
      ))}
    </div>
  </div>
)

UserWidget5.propTypes = {
  user: PropTypes.object.isRequired,
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default UserWidget5
