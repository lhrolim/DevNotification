import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        detailexpanded : state.projects.detailexpanded
    };
}

class ProjectRow extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ProjectRow);