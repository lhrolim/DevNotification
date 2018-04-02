import React from 'react'
import PropTypes from 'prop-types'
import '../css/user-widgets/user-widget-2.css'

const UserWidget2 = ({users, amount}) => (
  <div className="user-widget-2">
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
            <p>
              <span className="badge badge-outline badge-sm badge-info badge-pill">
                sed
              </span>
              <span className="badge badge-outline badge-sm badge-primary badge-pill">
                sed
              </span>
              <span className="badge badge-outline badge-sm badge-danger badge-pill">
                voluptatem
              </span>
            </p>
          </div>
          <i
            className={`d-flex align-self-center fa fa-dot-circle-o color-${user.color}`}
          />
        </li>
      ))}
    </ul>
  </div>
)

UserWidget2.defaultProps = {
  amount: 10
}

UserWidget2.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  amount: PropTypes.number
}

export default UserWidget2
