import React, { PropTypes } from 'react';
import { Button, Textfield } from 'react-mdl'
import s from './CommandBar.css';
import SearchInput from 'react-search-input'


class CommandBar extends React.Component {

    static propTypes = {
        className: PropTypes.string,
    }

    componentDidMount() {
        window.componentHandler.upgradeElement(this.root);
    }

    componentWillUnmount() {
        window.componentHandler.downgradeElements(this.root);
    }

    render() {
        return (
            <div className={`${s.commandbarouterstyle}`} ref={node => (this.root = node)} >
                <span className={`${s.commandbarinnerstyle}`}>
                <label style={{fontSize:'18px'}}>Projects</label>
                                
                <SearchInput className={`${s.searchinput}`} onChange={this.searchUpdated} />

                <Button primary={true} raised={true}>
                        <i className="material-icons">add</i>New
                </Button>
                </span>
                <hr />
            </div>
        );
    }

}

export default CommandBar;