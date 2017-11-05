import React from 'react'
import '../../css/elements/jumbotron-1.css'

const Jumbotron1 = ({view, controller}) => (
  <div className="jumbotron jumbotron-1">
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col">
          <h4 className="title">{view}</h4>
          <h5 className="subtitle">{controller}</h5>
        </div>
        <div className="col text-right jumbotron-actions">
          <div className="jumbotron-actions">
            <button className="btn btn-rounded btn-icon btn-warning m-r-10 btn-flat">
              <i className="material-icons">settings</i>
              <span className="color-default">Settings</span>
            </button>
            <button className="btn btn-rounded btn-icon btn-info btn-flat">
              <i className="material-icons">cached</i>
              <span className="color-default">Refresh</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Jumbotron1
