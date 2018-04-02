import React from 'react'
const TextInputs = () => (
  <form onSubmit={e => e.preventDefault()}>
    <div className="form-group">
      <label>Username</label>
      <input type="text" className="form-control" placeholder="Enter email" />
      <small className="form-text text-muted">Please enter your username</small>
    </div>
    <div className="form-group">
      <label>Email</label>
      <input type="email" className="form-control" placeholder="Enter email" />
      <small className="form-text text-muted">
        Please enter your email address
      </small>
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" placeholder="Password" />
      <small className="form-text text-muted">Please enter your password</small>
    </div>
    <div className="form-group">
      <label>Textarea</label>
      <textarea className="form-control" rows="6" />
      <small className="form-text text-muted">Please type something</small>
    </div>
  </form>
)
export default TextInputs
