import React from 'react';
import ProjectRow from './ProjectRow'

import { connect } from 'react-redux'
/* import '../../css/devnotification/grid.css' */


const ProjectsGrid = ({ projects,createfollow,link }) => {
    return (

        <div className="row col-xs-12 col-md-12">
            {projects.length > 0 && projects.map((item, i) => (
                <ProjectRow item={item} />
            ))}
            {projects.length === 0 &&
                <div className="noitems">
                    <span>You are currently following 0 projects.</span>
                    <button type="button" className="btn btn-success btn-rounded middlebutton" onClick={link}>Start</button>
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
