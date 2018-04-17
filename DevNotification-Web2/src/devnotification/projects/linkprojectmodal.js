// import Modal from 'react-modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Async } from 'react-select';


class LinkProjectmodal extends Component {

    constructor() {
        super();
        this.state = {
            value:[]
        };
    }

    onChange = (value) => {
        this.setState({
			value: value,
		});
    }

    getUsers(input) {
        if (!input) {
            return Promise.resolve({ options: [] });
        }

        return fetch(`https://api.github.com/search/users?q=${input}`)
            .then((response) => response.json())
            .then((json) => {
                return { options: json.items };
            });
    }

    gotoUser(value, event) {
        window.open(value.html_url);
    }

    render() {
        let that = this;

        return (
            <form onSubmit={e => e.preventDefault()}>

                <Async multi={true}
                    value={this.state.value} onChange={this.onChange}
                    onValueClick={this.gotoUser}
                    valueKey="id" labelKey="login"
                    loadOptions={this.getUsers}
                    backspaceRemoves={true} />
            </form>
        )
    }


};

export default connect()(LinkProjectmodal);



