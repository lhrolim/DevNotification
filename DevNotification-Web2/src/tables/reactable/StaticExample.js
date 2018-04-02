import React, {Component} from 'react'
import Table from './DefaultTable'
import countries from '../../json/countries.json'

class Reactable extends Component {
  constructor() {
    super()
    this.onSearch = this.onSearch.bind(this)
    this.onChangeItemsPerPage = this.onChangeItemsPerPage.bind(this)
    this.state = {
      items: Array.from(countries),
      search: '',
      itemsPerPage: 10
    }
    this.columns = [
      'alpha3Code',
      'name',
      'capital',
      'region',
      'subregion',
      'population'
    ]
    this.columnNames = [
      'Code',
      'Name',
      'Capital',
      'Region',
      'Sub-region',
      'Population'
    ]
  }
  onSearch(e) {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
    return false
  }
  onChangeItemsPerPage(e) {
    e.preventDefault()
    this.setState({
      itemsPerPage: e.target.value
    })
    return false
  }
  render() {
    return (
      <Table
        items={this.state.items}
        columns={this.columns}
        columnNames={this.columnNames}
        itemsPerPage={this.state.itemsPerPage}
        search={this.state.search}
        onSearch={this.onSearch}
        onChangeItemsPerPage={this.onChangeItemsPerPage}
      />
    )
  }
}
export default Reactable
