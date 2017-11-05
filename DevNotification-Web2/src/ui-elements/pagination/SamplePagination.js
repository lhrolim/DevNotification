import React from 'react'

const SamplePagination = ({className}) => (
  <nav>
    <ul className={className}>
      <li className="page-item">
        <a className="page-link" aria-label="Previous">
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link">1</a>
      </li>
      <li className="page-item">
        <a className="page-link">2</a>
      </li>
      <li className="page-item">
        <a className="page-link">3</a>
      </li>
      <li className="page-item">
        <a className="page-link">4</a>
      </li>
      <li className="page-item">
        <a className="page-link">5</a>
      </li>
      <li className="page-item">
        <a className="page-link" aria-label="Next">
          <span aria-hidden="true">»</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
)
export default SamplePagination
