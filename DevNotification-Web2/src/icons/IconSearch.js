import React from 'react'
import '../css/icons/icon-search.css'

const IconSearch = ({search}) => (
  <div className="row">
    <div className="col col-md-6 col-xl-4">
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-addon rounded-left">
            <i className="sli-magnifier" />
          </div>
          <input
            type="text"
            className="form-control rounded-right"
            placeholder="Search icons"
            onChange={search}
          />
        </div>
      </div>
    </div>
  </div>
)
export default IconSearch
