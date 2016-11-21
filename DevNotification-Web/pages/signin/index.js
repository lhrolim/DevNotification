import React from 'react'
import store from '../../core/store'
import {initLogin} from '../../core/authentication/actions'

class IndexPage extends React.Component {


    componentDidMount() {
      store.dispatch(initLogin());
    }

    render() {
        return (
            <div id="root"></div>
        )
    }

}

export default IndexPage;