import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';

function mapStateToProps(state) {
    return {
        loading: state.global.loading
    };
}

class BaseBodyComponent extends Component {
    render() {
        return (
            <div>
                {!this.props.loading ? (<div>
                    {this.props.children}
                </div>) : (
                        <div style={{ position: 'absolute', left: '50%', right: '50%' }}>
                            <RingLoader />
                        </div>
                    )}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(BaseBodyComponent);