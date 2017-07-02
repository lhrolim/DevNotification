import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

class ProjectList extends Component {

    constructor(props) {
        super(props);
    }

    renderProject({ _id, name, repoUrl, avatar }) {
        return (<Project name={name} key={_id} repoUrl={repoUrl} />);
    }

    render() {

        const projects = this.props.projects;
        if (projects.length > 0) {
            return (
                <ul> {projects.map(this.renderProject)} </ul>
            );
        } else {
            return (
                <div>No Projects found </div>
            );
        }
    }



}


export default ProjectList;