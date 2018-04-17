import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        detailexpanded : state.projects.detailexpanded
    };
}

class ProjectRow extends Component {
    render() {
        const {item} = this.props;
        return (
            <ul>
                <li>{item.name}</li>
            </ul>
        );
    }
}

export default connect(
    mapStateToProps,
)(ProjectRow);