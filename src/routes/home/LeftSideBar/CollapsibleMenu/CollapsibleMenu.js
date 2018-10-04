import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CollapsibleMenu.scss';
import MenuItem from './MenuItem/MenuItem';



class CollapsibleMenu extends Component {
  render() {
    return(
      <div>
        <div className={s.Menu}>Tasks</div>
        <div className={s.Menu}>Massages</div>
      </div>
    );
  }
}

export default withStyles(s)(CollapsibleMenu);
