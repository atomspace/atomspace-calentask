import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Header.scss';

class Header extends Component {
  render() {
    return(
      <div className={s.Header}>
        <div>11111</div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
