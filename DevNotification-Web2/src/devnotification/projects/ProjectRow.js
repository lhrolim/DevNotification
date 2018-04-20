import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        detailexpanded: state.projects.detailexpanded
    };
}

class ProjectRow extends Component {
    render() {
        const { item } = this.props;
        return (
            <tr>
                <td>
                    <i className={item.deviconpath} />
                </td>
                <td>{item.name}</td>
                <td>{item.latestversion}</td>
                <td>{item.githubdata.stars}</td>
                <td>{item.githubdata.watchers}</td>
                <td>{item.githubdata.contributors}</td>
                <td>{item.githubdata.openissues}</td>
                <td>{item.githubdata.lastcommit}</td>
            </tr>
        );
    }
}

export default connect(
    mapStateToProps,
)(ProjectRow);