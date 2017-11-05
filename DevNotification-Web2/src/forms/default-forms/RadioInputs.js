import React from 'react'
const RadioInputs = () => (
  <form onSubmit={e => e.preventDefault()}>
    <div className="form-group">
      <label className="custom-control custom-radio">
        <input
          name="radio"
          type="radio"
          className="custom-control-input"
          checked
          onChange={() => console.log('checked')}
        />
        <span className="custom-control-indicator" />
        <span className="custom-control-description">Toggle this</span>
      </label>
      <label className="custom-control custom-radio">
        <input name="radio" type="radio" className="custom-control-input" />
        <span className="custom-control-indicator" />
        <span className="custom-control-description">Or this</span>
      </label>
    </div>
  </form>
)
export default RadioInputs
