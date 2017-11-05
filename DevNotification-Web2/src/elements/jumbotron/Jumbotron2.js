import React from 'react'
import '../../css/elements/jumbotron-2.css'

const Jumbotron2 = ({view, controller}) => (
  <div className="jumbotron jumbotron-1">
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col">
          <h4 className="title">{view}</h4>
          <h5 className="subtitle">{controller}</h5>
        </div>
        <div className="col text-right jumbotron-actions">
          <ol className="breadcrumb icon-home icon-angle-right hidden">
            <li>
              <a>Home</a>
            </li>
            <li className="active p-r-0">{controller}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
)

export default Jumbotron2
