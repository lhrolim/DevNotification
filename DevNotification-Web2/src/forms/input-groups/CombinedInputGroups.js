import React from 'react'
const CombinedInputGroups = () => (
  <div className="row">
    <div className="col">
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon rounded-left">@</span>
          <input type="text" className="form-control" placeholder="Username" />
          <span className="input-group-addon rounded-right">example.com</span>
        </div>
        <small className="form-text text-muted">
          Please enter your username
        </small>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon rounded-left">
            <i className="fa fa-usd" />
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span className="input-group-btn rounded-right">
            <button className="btn btn-primary" type="button">
              Send
            </button>
          </span>
        </div>
        <small className="form-text text-muted">Please enter an amount</small>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon rounded-left">
            <i className="fa fa-search" />
          </span>
          <input
            type="text"
            className="form-control"
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
    </div>
  </div>
)
export default CombinedInputGroups
