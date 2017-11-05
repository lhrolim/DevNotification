import React from 'react'
import PropTypes from 'prop-types'
import '../css/table-widgets/table-widget-10.css'
const TableWidget10 = ({items, amount}) => (
  <div className="table-widget-10">
    <table className="table">
      <tbody>
        {items.slice(0, amount).map((item, i) => (
          <tr key={i}>
            <td className="ticker">{item.ticker}</td>
            <td className="numbers">
              <span className="price">{item.price}</span>
              <span
                className={
                  item.variation > 0
                    ? 'variation variation-up'
                    : 'variation variation-down'
                }>
                ({item.variation}%)
              </span>
              <span className="indicator">
                <i
                  className={
                    item.variation > 0 ? 'fa fa-caret-up' : 'fa fa-caret-down'
                  }
                />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

TableWidget10.defaultProps = {
  amount: 5
}

TableWidget10.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  amount: PropTypes.number
}

export default TableWidget10
