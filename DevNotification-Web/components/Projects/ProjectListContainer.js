import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectList from './ProjectList'

import restService from '../../core/navigation/restService'


class ProjectListContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            search: null,
            page: 1,
            pageSize:10,
            onlySubscribed: false,
            projects: []
        }
    }

    componentDidMount() {
        const state = this.state;
        restService.getPromise("Project").then(projects=>{
            const newState = { ...state, projects };
            this.setState(newState);
        })
    }


    render() {
        return <ProjectList projects={this.state.projects} />;
    }
}

export default ProjectListContainer;