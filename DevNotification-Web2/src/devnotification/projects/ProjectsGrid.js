import React from 'react';
import ProjectRow from './ProjectRow'

import {connect} from 'react-redux'

const ProjectsGrid = ({ projects }) => {
    return (

        <div class="row col-xs-12 col-md-12">
            {projects.length > 0 && projects.map((item, i) => (
                <ProjectRow item={item} />
            ))}
            {projects.length ===0 &&
                <span>You are currently following 0 projects. Start following something!!</span>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProjectsGrid);
