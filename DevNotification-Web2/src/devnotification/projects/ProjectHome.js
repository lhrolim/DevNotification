import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsGrid from './ProjectsGrid';
import { RingLoader } from 'react-spinners';

function mapStateToProps(state) {
    return {
        projects: state.user.projects,
        loaded: state.user.loaded,
    };
}

class ProjectHome extends Component {
    
    componentWillMount(){

    }


    render() {
        const loaded = this.props.loaded;

        return (
            ()=>{
                if (!!loaded){
                    {/* <ProjectsGrid projects={projects}/> */}
                }else{
                    <RingLoader/>
                }
            }

        );
    }
}

export default connect(
    
    mapStateToProps,
)(ProjectHome);