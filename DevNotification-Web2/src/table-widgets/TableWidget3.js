import React from 'react'
import PropTypes from 'prop-types'
import '../css/table-widgets/table-widget-3.css'
const TableWidget3 = ({items, amount}) => (
  <div className="table-widget-3">
    <table className="table table-unbordered table-striped">
      <tbody>
        {items.slice(0, amount).map((item, i) => (
          <tr key={i}>
            <td>
              <img
                src={`/assets/images/products/${item.img}`}
                className="rounded-circle"
                alt=""
              />
            </td>
            <td>{'#' + item.sku}</td>
            <td>{item.brand}</td>
            <td>{item.name}</td>
            <td>{'$' + item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

TableWidget3.defaultProps = {
  amount: 10
}
TableWidget3.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  number: PropTypes.number
}
export default TableWidget3
