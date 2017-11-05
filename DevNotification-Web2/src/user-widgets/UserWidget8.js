import React from 'react'
import PropTypes from 'prop-types'
import '../css/user-widgets/user-widget-8.css'

const UserWidget8 = ({users, amount}) => (
  <div className="user-widget-8">
    <ul className="list-unstyled">
      {users.slice(0, amount).map((user, i) => (
        <li className="media" key={i}>
          <img
            className="rounded-circle d-flex align-self-center"
            src={user.img}
            alt=""
          />
          <div className="media-body">
            <h5>{user.name}</h5>
            <p>{user.company}</p>
            <p>{user.description}</p>
          </div>
          <i
            className={`d-flex align-self-center fa fa-dot-circle-o color-${user.color}`}
          />
        </li>
      ))}
    </ul>
  </div>
)

UserWidget8.defaultProps = {
  amount: 10
}

UserWidget8.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  amount: PropTypes.number
}

export default UserWidget8
