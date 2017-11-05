import React from 'react'
const Checkboxes = () => (
  <form onSubmit={e => e.preventDefault()}>
    <div className="form-group">
      <label className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          checked
          onChange={() => console.log('checked')}
        />
        <span className="custom-control-indicator" />
        <span className="custom-control-description">Check this</span>
      </label>
    </div>
    <div className="form-group">
      <label className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" />
        <span className="custom-control-indicator" />
        <span className="custom-control-description">And this</span>
      </label>
    </div>
  </form>
)
export default Checkboxes
