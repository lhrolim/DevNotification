import React from 'react'
const InputSizing = () => (
  <form onSubmit={e => e.preventDefault()}>
    <div className="row">
      <div className="col">
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder=".form-control-sm"
          />
        </div>
      </div>
    </div>
  </form>
)
export default InputSizing
