import React from 'react'
import {Link} from 'react-router-dom'

const CallToAction = () => (
  <div className="row call-to-action">
    <div className="col">
      <Link
        to="/documentation/installation"
        className="btn btn-rounded btn-primary btn-flat btn-raised m-r-10">
        View documentation
      </Link>
      <a
        href="https://themeforest.net/item/sigma-react-redux-bootstrap-4-admin-template/20546436"
        className="btn btn-rounded btn-primary btn-raised"
        target="_blank"
        rel="noopener noreferrer">
        Purchase now
      </a>
    </div>
  </div>
)
export default CallToAction
