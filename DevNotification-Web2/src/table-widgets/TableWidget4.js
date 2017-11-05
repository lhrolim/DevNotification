import React from 'react'
import PropTypes from 'prop-types'
//import '../css/table-widgets/table-widget-4.css'
const TableWidget4 = ({items}) => (
  <div className="table-widget-4">
    <table className="table table-unbordered table-striped">
      <thead>
        <tr>
          <th>Status</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Order value</th>
          <th>IP Address</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>
              <span className={`badge badge-${item.color} badge-outline`}>
                {item.status}
              </span>
            </td>
            <td>{item.date}</td>
            <td>{item.customer}</td>
            <td>{item.amount}</td>
            <td>{item.ip}</td>
            <td>{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

TableWidget4.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default TableWidget4
