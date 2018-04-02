import React from 'react'
const InlineForms = () => (
  <form className="form-inline" onSubmit={e => e.preventDefault()}>
    <div className="form-group">
      <label>Username</label>
      <input type="text" className="form-control" placeholder="Username" />
    </div>
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="email@example.com"
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
)
export default InlineForms
