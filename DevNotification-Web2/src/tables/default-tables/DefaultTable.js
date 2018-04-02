import React from 'react'
import items from '../../json/stocks.json'

const DefaultTable = () => (
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Variation</th>
        </tr>
      </thead>
      <tbody>
        {items.slice(0, 5).map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.ticker}</td>
            <td>{item.price}</td>
            <td
              className={item.variation > 0 ? 'color-success' : 'color-danger'}>
              {item.variation}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
export default DefaultTable
