import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsGrid from './ProjectsGrid';

import { loadProjectData } from '../core/user/useraction'
import DashboardWidget from '../components/DashboardWidget';

function mapStateToProps(state) {
    return {
        projects: state.user.projects,
        loaded: state.user.projects.loaded,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        load: () => {
            dispatch(loadProjectData())
        }
    }
}

class ProjectHome extends Component {

    async componentWillMount() {
        const loaded = this.props.loaded;
        if (!loaded) {
            await this.props.load();
        }
    }


    render() {
        const projects = this.props.projects.data || [];

        return (
            <div>
                <DashboardWidget title={"Following"} description={"The projects you are following"}>
                    <ProjectsGrid />
                </DashboardWidget>
            </div>
        )

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectHome);