import React from 'react'
const RightAlignedInputGroups = () => (
  <div className="row">
    <div className="col">
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-left"
            placeholder="Username"
          />
          <span className="input-group-addon rounded-right">@</span>
        </div>
        <small className="form-text text-muted">
          Please enter your username
        </small>
      </div>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-left"
            placeholder="Type something..."
          />
          <span className="input-group-btn rounded-right">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </span>
        </div>
        <small className="form-text text-muted">Please type something</small>
      </div>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-left"
            placeholder="Email"
          />
          <span className="input-group-addon rounded-right">
            <i className="fa fa-envelope-o" />
          </span>
        </div>
        <small className="form-text text-muted">Please enter your email</small>
      </div>
    </div>
  </div>
)
export default RightAlignedInputGroups
