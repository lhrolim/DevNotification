// import Modal from 'react-modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateProjectmodal extends Component {


    render() {
        let that = this;

        return (
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <label>Project Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                    <small className="form-text text-muted">Please enter the name of the project</small>
                </div>
                <div className="form-group">
                    <label>URL</label>
                    <input type="email" className="form-control" placeholder="Github URL" />
                    <small className="form-text text-muted">
                        Please enter the url of the github
              </small>
                </div>
            </form>
        )
    }


};

export default connect()(CreateProjectmodal);



