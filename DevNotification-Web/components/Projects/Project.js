import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl'

class Project extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <ListItem twoLine>

                <span className="mdl-list__item-primary-content">
                    <i className={this.props.avatar}></i>
                    <span>{this.props.name}</span><span className="mdl-list__item-sub-title">{this.props.description}</span></span>
                <ListItemAction info="Subscribe">
                    <a href="#"><Icon name="star" /></a>
                </ListItemAction>
            </ListItem>
        );
    }
}

Project.propTypes = {

};

export default Project;