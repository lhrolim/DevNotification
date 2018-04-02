import React from 'react'
import PropTypes from 'prop-types'
import '../css/table-widgets/table-widget-2.css'
const TableWidget2 = ({items, amount}) => (
  <div className="table-widget-2">
    <table className="table table-unbordered table-striped">
      <tbody>
        {items.slice(0, amount).map((item, i) => (
          <tr key={i}>
            <td>
              <i className={item.icon} />
            </td>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.percent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

TableWidget2.defaultProps = {
  amount: 5
}
TableWidget2.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  amount: PropTypes.number
}
export default TableWidget2
