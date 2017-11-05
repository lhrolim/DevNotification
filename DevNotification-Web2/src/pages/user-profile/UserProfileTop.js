import React from 'react'
import '../../css/pages/user-profile-top.css'

const UserProfileTop = () => (
  <div className="user-profile-top">
    <img className="rounded-circle" src="/assets/faces/m7.png" alt="" />
    <h5>Eric Simpson</h5>
    <p>Innovation Pioneer</p>
    <div className="row text-center buttons">
      <div className="col">
        <div className="row flex-items-xs-middle">
          <div className="col">
            <button
              type="button"
              className="btn btn-facebook btn-circle btn-outline btn-xs">
              <i className="fa fa-facebook" />
            </button>
            <button
              type="button"
              className="btn btn-twitter btn-circle btn-outline btn-xs">
              <i className="fa fa-twitter" />
            </button>
            <button
              type="button"
              className="btn btn-youtube btn-circle btn-outline btn-xs">
              <i className="fa fa-youtube" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default UserProfileTop
