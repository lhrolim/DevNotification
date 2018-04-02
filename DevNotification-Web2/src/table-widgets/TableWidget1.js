import React from 'react'
import PropTypes from 'prop-types'
//import '../css/table-widgets/table-widget-1.css'
const TableWidget1 = ({items, amount}) => (
  <div className="table-widget-1">
    <table className="table table-unbordered table-striped">
      <tbody>
        {items.slice(0, amount).map((item, i) => (
          <tr key={i}>
            <td>
              <span
                className={`flag flag-icon-background flag-icon flag-icon-${item.code}`}
              />
            </td>
            <td>
              <span className="country-name">{item.name}</span>
            </td>
            <td>{item.amount}</td>
            <td>{item.percent + '%'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

TableWidget1.defaultProps = {
  amount: 10
}

TableWidget1.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  amount: PropTypes.number
}

export default TableWidget1
