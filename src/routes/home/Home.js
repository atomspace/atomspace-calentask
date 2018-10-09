/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import LeftSideBar from './LeftSideBar/LeftSideBar';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import s from './Home.scss';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <LeftSideBar />
        <Calendar />
      </div>
    );
  }
}

export default withStyles(s)(Home);
