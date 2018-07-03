import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import Avatar from './soccer-player.svg';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={s.sidebarblock}>
        <img className={s.avatarlogo} src={Avatar} />
        <h2 className={s.nametext}>Your Name</h2>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
