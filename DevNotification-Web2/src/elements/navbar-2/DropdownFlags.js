import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/elements/dropdown-flags.css'

const DropdownFlags = ({flags}) => (
  <div className="navbar-dropdown dropdown-flags">
    <div className="dropdown-title">Countries</div>
    <div className="dropdown-inner">
      {flags.map((flag, i) => (
        <div key={i} className="dropdown-item">
          <Link to="/">
            <span
              className={`flag flag-icon-background flag-icon flag-icon-${flag.code}`}
            />
            <span className="country-name">{flag.name}</span>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

let flags = [
  {
    code: 'br',
    name: 'Brasil'
  },
  {
    code: 'us',
    name: 'USA'
  },
  {
    code: 'es',
    name: 'España'
  },
  {
    code: 'ru',
    name: 'Россия'
  },
  {
    code: 'cn',
    name: 'China'
  },
  {
    code: 'in',
    name: 'India'
  },
  {
    code: 'ca',
    name: 'Canada'
  },
  {
    code: 'au',
    name: 'Australia'
  },
  {
    code: 'jp',
    name: 'Japan'
  },
  {
    code: 'kr',
    name: 'Korea'
  }
]

const SampleDropdownFlags = () => <DropdownFlags flags={flags} />

export default SampleDropdownFlags
