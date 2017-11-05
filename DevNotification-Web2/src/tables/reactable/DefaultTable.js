import React from 'react'
import {Table, Thead, Th, Tr, Td} from 'reactable'
import '../../css/tables/reactable.css'

const DefaultTable = ({
  items,
  columns,
  columnNames,
  itemsPerPage,
  search,
  onSearch,
  onChangeItemsPerPage
}) => {
  return (
    <div>
      <div className="row d-flex">
        <div className="col-4">
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon rounded-left">Search</span>
                <input
                  className="form-control rounded-right"
                  type="text"
                  value={search}
                  onChange={onSearch}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-8">
          <form onSubmit={e => e.preventDefault()} className="pull-right">
            <div className="form-group form-inline">
              <span className="m-r-10">Show</span>
              <select
                className="custom-select m-r-10"
                onChange={onChangeItemsPerPage}
                value={itemsPerPage}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span>entries</span>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Table
            className="table table-striped"
            itemsPerPage={itemsPerPage}
            pageButtonLimit={5}
            sortable={true}
            filterable={columns}
            hideFilterInput
            filterBy={search}
            noDataText="No matching records found">
            <Thead>
              {columns.map((column, i) => (
                <Th key={i} column={column}>
                  {columnNames[i]}
                </Th>
              ))}
            </Thead>
            {items.map((item, i) => (
              <Tr key={i}>
                {columns.map((column, j) => (
                  <Td key={j} column={column} data={item[column]}>
                    <span>{item[column]}</span>
                  </Td>
                ))}
              </Tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  )
}
DefaultTable.defaultProps = {
  items: [],
  columns: [],
  itemsPerPage: 20,
  text: ''
}
export default DefaultTable
