import ProjectRow from './ProjectRow'

import { connect } from 'react-redux'
/* import '../../css/devnotification/grid.css' */
import '../../css/table-widgets/table-widget-3.css'
import { width } from 'window-size';

import React, { Component } from 'react';
import Table from '../../tables/reactable/DefaultTable'

class ProjectsGrid extends Component {

    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this)
        this.onChangeItemsPerPage = this.onChangeItemsPerPage.bind(this)
        this.columns = [{
            name: "deviconpath",
            label: "",
            type: "icon"
        },
        {
            name: "name",
            label: "Name"
        },
        {
            name: "description",
            label: "Description"
        },
        {
            name: "latestversion",
            label: "Latest Version"
        }],
        this.state = {
            search: '',
            itemsPerPage: 10
        }
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

    async componentWillReceiveProps() {
        let { projects } = this.props;
        let items = projects.data || []
        this.setState({ items: items })
    }



    render() {
        const { projects, createfollow, link } = this.props;
        let items = projects.data || []
        return (

            <Table
                items={items}
                columns={this.columns}
                columnNames={this.columnNames}
                itemsPerPage={this.state.itemsPerPage}
                search={this.state.search}
                onSearch={this.onSearch}
                onChangeItemsPerPage={this.onChangeItemsPerPage}
            />
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        projects: state.user.projects,
        loaded: state.user.projects.loaded,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        createfollow: () => {
            dispatch({
                type: "SHOW_MODAL", modalType: 'CREATE_PROJECT',
                modalProps: {
                    link: true,
                    title: 'Link'
                }
            })
        },
        link: () => {
            dispatch({
                type: "SHOW_MODAL", modalType: 'LINK_PROJECT',
                modalProps: {
                    title: 'Link'
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsGrid);
