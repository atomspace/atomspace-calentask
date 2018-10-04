import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftSideBar.scss'
import Avatar from './AvatarComponent/Avatar';
import Weather from './WeatherComponent/Weather';
import CollapsibleMenu from './CollapsibleMenu/CollapsibleMenu';

class LeftSideBar extends Component {
  render() {
    return (
      <div className={s.LeftSideBar}>
        <Avatar />
        <Weather />
        <CollapsibleMenu />
      </div>
    );
  }
}

export default withStyles(s)(LeftSideBar);
