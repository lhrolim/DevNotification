import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import {List} from 'react-mdl'

class ProjectList extends Component {

    constructor(props) {
        super(props);
    }

    renderProject({ _id, name, repoUrl, deviconpath, description }) {
        return (<Project name={name} key={_id} repoUrl={repoUrl} description={description} avatar={deviconpath} />);
    }

    render() {

        const projects = this.props.projects;
        if (projects.length > 0) {
            return (
                <List> {projects.map(this.renderProject)} </List>
            );
        } else {
            return (
                <div>No Projects found </div>
            );
        }
    }



}


export default ProjectList;