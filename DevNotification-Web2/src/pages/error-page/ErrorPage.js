import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/pages/error-page.css'

const ErrorPage = () => (
  <div className="error-page">
    <h1 className="animated fadeIn delay-100">404</h1>
    <h3 className="animated fadeIn delay-500">Page not found</h3>
    <Link
      to="/"
      className="btn btn-primary btn-lg btn-block animated fadeIn delay-1000">
      Return to homepage
    </Link>
  </div>
)

export default ErrorPage
