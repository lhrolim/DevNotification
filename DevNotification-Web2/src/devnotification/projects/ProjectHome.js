import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsGrid from './ProjectsGrid';
import { RingLoader } from 'react-spinners';

import { loadProjectData } from '../core/user/useraction'

function mapStateToProps(state) {
    return {
        projects: state.user.projects.data,
        loaded: state.user.projects.loaded,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        load: () => {
            dispatch(loadProjectData)
        }
    }
}

class ProjectHome extends Component {

    componentWillMount() {
        const loaded = this.props.loaded;
        if (!loaded) {
            this.props.load();
        }
    }


    render() {
        const loaded = this.props.loaded;
        const projects = this.props.projects;


        return (
            <div>
                {loaded ? (<ProjectsGrid projects={projects} /> ) : (<RingLoader />)}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectHome);