import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

Project.propTypes = {
    
};

export default Project;