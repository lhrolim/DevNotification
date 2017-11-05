import React from 'react'
const LeftAlignedInputGroups = () => (
  <div className="row">
    <div className="col">
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon rounded-left">@</span>
          <input
            type="text"
            className="form-control rounded-right"
            placeholder="Username"
          />
        </div>
        <small className="form-text text-muted">
          Please enter your username
        </small>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon rounded-left">
            <i className="fa fa-envelope-o" />
          </span>
          <input
            type="text"
            className="form-control rounded-right"
            placeholder="Email"
          />
        </div>
        <small className="form-text text-muted">Please enter your email</small>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-btn rounded-left">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </span>
          <input
            type="text"
            className="form-control rounded-right"
            placeholder="Type something..."
          />
        </div>
        <small className="form-text text-muted">Please type something</small>
      </div>
    </div>
  </div>
)
export default LeftAlignedInputGroups
