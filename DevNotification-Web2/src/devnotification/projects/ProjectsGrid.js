import React from 'react';
import ProjectRow from './ProjectRow'

import { connect } from 'react-redux'
import '../../css/devnotification/grid.css'


const ProjectsGrid = ({ projects }) => {
    return (

        <div class="row col-xs-12 col-md-12">
            {projects.length > 0 && projects.map((item, i) => (
                <ProjectRow item={item} />
            ))}
            {projects.length === 0 &&
                <div class="noitems">
                    <span>You are currently following 0 projects.</span>
                        <button type="button" class="btn btn-success middlebutton">Start</button>
                    <span>following something!!</span>
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsGrid);
