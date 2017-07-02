/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import CommandBar from '../CommandBar';
import s from './Layout.css';
import { Drawer, Navigation } from 'react-mdl'

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }


  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        
        <div className="mdl-layout__inner-container">
          <Drawer title="Menu">
            <Navigation>
              <a href="#">My Applications</a>
              <a href="#">My Projects</a>
            </Navigation>
          </Drawer>
          <Header />
          <CommandBar/>

          <main className="mdl-layout__content">
            <div {...this.props} className={cx(s.content, this.props.className)} />
          </main>
          <Footer />

        </div>
      </div>
    );
  }
}


export default Layout;
