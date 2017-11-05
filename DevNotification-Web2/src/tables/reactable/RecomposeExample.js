/*
import React from 'react'
import DefaultTable from './DefaultTable'
import {compose, lifecycle, branch, renderComponent} from 'recompose'

const withData = lifecycle({
	state: {
		loading: false,
		data: []
	},
	componentDidMount() {
		let url = "/json/countries.json"
		this.setState({
			loading: true
		})
    fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log('data', data);
				this.setState({
					loading: false
					data
				})
			})
	}
})

const isLoading = ({loading}) => loading

const withLoader = branch(
	isLoading,
	renderComponent(DefaultTable)
)

const enhance = compose(
	withLoader,
	withData
)

              columns={[
                'alpha3Code',
                'name',
                'capital',
                'region',
                'subregion',
                'population'
              ]}
              columnNames={[
                'Code',
                'Name',
                'Capital',
                'Region',
                'Sub-region',
                'Population'
              ]}
const AjaxExample = enhance(({items, onChange}) => {
	//console.log('states', states);
	return (
	<div className="form-group m-r-10">
		<label className="m-r-10">Estado</label>
		<select
			name="estado"
			className="form-control"
			onChange={onChange} defaultValue="0">
			<option value="-1">Seleccionar</option>
			{states.map((option, i) => (
				<option key={i} value={option.id}>{option.name}</option>
			))}
		</select>
	</div>
	)
})

export default States

*/
