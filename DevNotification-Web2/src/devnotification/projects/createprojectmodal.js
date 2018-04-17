// import Modal from 'react-modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateProjectmodal extends Component {


    render() {
        let that = this;

        return (
            <form onSubmit={e => e.preventDefault()}>
                that.this.props.create 


                <div className="form-group">
                    <label>Project Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                    <small className="form-text text-muted">Please enter the name of the project</small>
                </div>

                <div className="form-group">
                    <label>Start Page</label>
                    <input type="text" className="form-control" placeholder="Main URL" />
                    <small className="form-text text-muted">
                        The main page of the project
                    </small>
                </div>

                <div className="form-group">
                    <label>Github Url</label>
                    <input type="text" className="form-control" placeholder="Github URL" />
                    <small className="form-text text-muted">
                        Please enter the url of the github
                    </small>
                </div>

                <div className="form-group">
                    <label>Release Notes URL</label>
                    <input type="text" className="form-control" placeholder="Release Notes URL" />
                    <small className="form-text text-muted">
                        (Optional) Please enter the release notes Url
                    </small>
                </div>
            </form>
        )
    }


};

export default connect()(CreateProjectmodal);



